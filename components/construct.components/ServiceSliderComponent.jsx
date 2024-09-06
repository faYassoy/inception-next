import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
// import Autoplay from 'embla-carousel-autoplay';
// import { PrevIcon, NextIcon } from './Icons'; // Assume you have icon components

const ServiceSliderComponent = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi]);

  const services = [
    {
      title: 'Service One',
      description: 'Description for service one.',
      icon: '/icons/service1.svg', // Replace with your icons or images
    },
    {
      title: 'Service Two',
      description: 'Description for service two.',
      icon: '/icons/service2.svg',
    },
    {
      title: 'Service Three',
      description: 'Description for service three.',
      icon: '/icons/service3.svg',
    },
    {
      title: 'Service Four',
      description: 'Description for service four.',
      icon: '/icons/service4.svg',
    },
    {
      title: 'Service Five',
      description: 'Description for service five.',
      icon: '/icons/service5.svg',
    },
    {
      title: 'Service Six',
      description: 'Description for service six.',
      icon: '/icons/service6.svg',
    },
  ];

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -mx-4">
          {services.map((service, index) => (
            <div
              className="min-w-[100%] md:min-w-[33.3333%] px-4 flex-shrink-0"
              key={index}
            >
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <Image
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 mx-auto mb-4"
                  width={1900}
                  height={600}
                />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {selectedIndex != 0 && (
        <button
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow absolute top-1/2 left-4 transform -translate-y-1/2 hover:bg-gray-100 transition"
          onClick={scrollPrev}
        >
          <FontAwesomeIcon icon={faCaretLeft} size="2x" />
        </button>
      )}
      {selectedIndex != scrollSnaps.length - 1 && (
        <button
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow absolute top-1/2 right-4 transform -translate-y-1/2 hover:bg-gray-100 transition"
          onClick={scrollNext}
        >
          <FontAwesomeIcon icon={faCaretRight} size="2x" />
        </button>
      )}

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === selectedIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceSliderComponent;
