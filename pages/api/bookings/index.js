import prisma from '../../../lib/db';

export default async function handler(req, res) {
  // =========================>
  // ## Get All Booking
  // =========================>
  if (req.method === 'GET') {
    // Get all bookings with optional filtering and searching
    const { search, filter, paginate, page } = req.query;

    try {
      const whereClause = {};

      if (search) {
        whereClause.OR = [
          { name: { contains: search, mode: 'insensitive' } },
          { email: { contains: search, mode: 'insensitive' } },
          { phoneNumber: { contains: search, mode: 'insensitive' } },
          { eventName: { contains: search, mode: 'insensitive' } },
        ];
      }

      if (filter) {
        whereClause.status = filter;
      }

      const totalRow = await prisma.booking.count();
      const bookings = await prisma.booking.findMany({
        skip: (parseInt(page) - 1) * parseInt(paginate),
        take: parseInt(paginate),
        where: whereClause,
        orderBy: { eventDate: 'asc' },
      });

      res.status(200).json({
        massage: 'success',
        data: bookings,
        total_row: totalRow,
      });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch bookings' });
    }

    // =========================>
    // ## Create Booking
    // =========================>
  } else if (req.method === 'POST') {
    const {
      name,
      email,
      phoneNumber,
      eventName,
      eventDate,
      detail,
      style,
      prefix,
    } = req.body;

    try {
      const existingBooking = await prisma.booking.findFirst({
        where: {
          phoneNumber: prefix + phoneNumber,
          status: { not: 'done' },
        },
      });

      if (existingBooking) {
        return res.status(422).json({
          massage: `Previous booking from ${
            prefix + phoneNumber
          } still on progres`,
          errors: { phoneNumber: ['Use diffrent phone Number'] },
        });
      }

      const newBooking = await prisma.booking.create({
        data: {
          name,
          email,
          phoneNumber: prefix + phoneNumber,
          eventName,
          eventDate: new Date(eventDate),
          detail,
          style,
          status: 'proceed', // Default status
        },
      });

      // Here you could send a WhatsApp message before creating the booking
      // For example: await sendWhatsAppMessage(newBooking);

      res.status(201).json(newBooking);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create booking' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
