import Image from 'next/image';
import Link from 'next/link';
import SevicesListComponent from '../components/construct.components/sevicesList.component';
import FormBookingComponent from '../components/construct.components/formBooking.component';

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 text-white fixed w-full z-10 top-0">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <span className="text-xl font-bold cursor-pointer">
              INCEPTION STUDIO
            </span>
          </Link>
          <div className="space-x-4">
            <Link href="#hero">
              <span className="hover:text-red-500 cursor-pointer">ABOUT</span>
            </Link>
            <Link href="#portfolio">
              <span className="hover:text-red-500 cursor-pointer">
                PORTOFOLIO
              </span>
            </Link>
            <Link href="#services">
              <span className="hover:text-red-500 cursor-pointer">GALLERY</span>
            </Link>
            <Link href="#testimonials">
              <span className="hover:text-red-500 cursor-pointer">
                TESTIMONIALS
              </span>
            </Link>
            <Link href="#contact">
              <span className="hover:text-red-500 cursor-pointer">CONTACT</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="bg-gray-900 text-white h-screen grid grid-cols-12 pt-16"
      >
        <div className="col-span-6 h-full bg-primary">
          <h1 className="text-9xl font-semibold py-14 px-8 space-y-6">
            <div>CAPTURE</div>
            <div>YOUR</div>
            <div>MOMENT</div>
            <div>WITH US</div>
          </h1>
        </div>
        <div className="col-span-6 h-full bg-secondary">
          <Image
            src="/image.jpg"
            alt="shuld be an image"
            width={404}
            height={404}
          />
        </div>
      </section>
      <section id="about" className="  h-screen grid grid-cols-12 pt-8">
        <div className="col-span-4 h-full bg-secondar flex flex-col p-4 gap-8">
          <b className="text-6xl font-semibold">ABOUT</b>
          <Image
            className='bg-primary'
            src="/image.jpg"
            alt="shuld be an image"
            width={404}
            height={505}
          />
        </div>
        <div className="col-span-2"></div>
        <div className="col-span-5 h-full bg-primar flex flex-col justify-between p-8">
          <div className="space-y-4">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              saepe placeat sunt, tenetur, nesciunt debitis, harum soluta itaque
              a aperiam maiores? Deserunt illum consequuntur obcaecati
              blanditiis reprehenderit optio expedita porro. Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Aliquid saepe placeat sunt,
              tenetur, nesciunt debitis, harum soluta itaque a aperiam maiores?
              Deserunt illum consequuntur obcaecati blanditiis reprehenderit
              optio expedita porro.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              saepe placeat sunt, tenetur, nesciunt debitis, harum soluta itaque
              a aperiam maiores? Deserunt illum consequuntur obcaecati
              blanditiis reprehenderit optio expedita porro.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              saepe placeat sunt, tenetur, nesciunt debitis, harum soluta itaque
              a aperiam maiores? Deserunt illum consequuntur obcaecati
              blanditiis reprehenderit optio expedita porro.
            </p>
          </div>
          <div className="grid grid-cols-2">
            <div className="space-y-4 ">
              <b className="block text-5xl">99</b> <p>Finised Project</p>
            </div>
            <div className="space-y-4 ">
              <b className="block text-5xl">99</b> <p>Ongoing Project</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example images */}
            <div className="w-full h-64 relative">
              <Image
                width={400}
                height={180}
                src="/path-to-your-image1.jpg"
                alt="Portfolio Image 1"
              />
            </div>
            <div className="w-full h-64 relative">
              <Image
                width={400}
                height={180}
                src="/path-to-your-image2.jpg"
                alt="Portfolio Image 2"
              />
            </div>
            <div className="w-full h-64 relative">
              <Image
                width={400}
                height={180}
                src="/path-to-your-image3.jpg"
                alt="Portfolio Image 3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Services</h2>
          <SevicesListComponent />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
          <p className="text-xl italic text-gray-600 mb-4">
            "Fantastic experience! The photos were amazing and captured our
            wedding perfectly."
          </p>
          <p className="text-xl italic text-gray-600">
            "Highly professional and a pleasure to work with."
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-60 py-10">
          <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
          <FormBookingComponent />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Your Studio. All rights reserved.</p>
          <div className="flex justify-center mt-4">
            {/* Add social media icons */}
            <a href="#" className="mx-2 text-gray-400 hover:text-white">
              Facebook
            </a>
            <a href="#" className="mx-2 text-gray-400 hover:text-white">
              Instagram
            </a>
            <a href="#" className="mx-2 text-gray-400 hover:text-white">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
