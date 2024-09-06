import Image from 'next/image';
import Link from 'next/link';
// import SevicesListComponent from '../components/construct.components/sevicesList.component';
import FormBookingComponent from '../components/construct.components/formBooking.component';
import ServiceSliderComponent from '../components/construct.components/ServiceSliderComponent';
import ParallaxGallery from '../components/construct.components/ParallaxGallery';

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
            <Link href="#about">
              <span className="hover:text-red-500 cursor-pointer">ABOUT</span>
            </Link>
            <Link href="#portfolio" className='hidden md:inline'>
              <span className="hover:text-red-500 cursor-pointer">
                PORTOFOLIO
              </span>
            </Link>
            <Link href="#services">
              <span className="hover:text-red-500 cursor-pointer">GALLERY</span>
            </Link>
            <Link href="#testimonials" className='hidden md:inline'>
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
        className="bg-gray-900 text-white h-fit md:h-screen grid pt-16 md:grid-cols-2 "
      >
        <div className="h-full bg-primary">
          <div className="text-6xl md:text-9xl font-semibold py-14 px-8 space-y-6">
            <div className='w-fit'>CAPTURE</div>
            <div className='w-fit'>YOUR</div>
            <div className='w-fit'>MOMENT</div>
            <div className='w-fit'>WITH US</div>
          </div>
        </div>
        <div className=" h-full bg-secondary">
          <Image
            src="/image.jpg"
            alt="shuld be an image"
            width={404}
            height={404}
          />
        </div>
      </section>
      <section
        id="about"
        className=" pb-20 md:pb-4 md:h-screen grid md:grid-cols-12 pt-8"
      >
        <div className="relative col-span-4 h-full bg-secondar flex flex-col px-8 md:p-4 gap-8">
          <b className="text-4xl md:text-6xl font-semibold">ABOUT</b>
          <Image
            className="hidden md:block bg-primary absolute bottom-0"
            src="/image.jpg"
            alt="shuld be an image"
            width={404}
            height={505}
          />
        </div>
        <div className="col-span-2"></div>
        <div className="col-span-5 h-full bg-primar flex flex-col gap-8 justify-between p-8">
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
        <ParallaxGallery />
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Services</h2>
          <ServiceSliderComponent />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3">
           
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900  ">
        <div className="container mx-auto px-10 md:px-60 py-10">
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
