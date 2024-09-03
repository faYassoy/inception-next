import prisma from '../../../lib/db';
export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const booking = await prisma.booking.findUnique({
        where: { id: parseInt(id) },
      });

      if (!booking) {
        return res.status(404).json({ message: 'Booking not found' });
      }

      res.status(200).json(booking);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch booking' });
    }
  } else if (req.method === 'POST') {
    // Update an existing booking
    const {
      name,
      email,
      phoneNumber,
      eventName,
      eventDate,
      eventStyle,
      details,
      status,
      _method,
    } = req.body;
    if (_method != 'PUT') {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
    try {
      const updatedBooking = await prisma.booking.update({
        where: { id: parseInt(id) },
        data: {
          name,
          email,
          phoneNumber,
          eventName,
          eventDate: new Date(eventDate),
          eventStyle,
          details,
          status,
        },
      });

      res.status(200).json(updatedBooking);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update booking' });
    }
  } else if (req.method === 'DELETE') {
    // Delete a booking
    try {
      await prisma.booking.delete({
        where: { id: parseInt(id) },
      });

      res.status(200).json({ message: 'Customer deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete booking' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
