'use client';

import { useEffect } from 'react';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialsSection() {
  useEffect(() => {
    const swiper = new Swiper('.testimonials-container', {
      modules: [Pagination],
      spaceBetween: 24,
      loop: true,
      grabCursor: true,
      pagination: { el: '.swiper-pagination', clickable: true },
      breakpoints: {
        576: { slidesPerView: 2 },
        768: { slidesPerView: 2, spaceBetween: 48 },
      },
    });
    return () => swiper.destroy();
  }, []);

  const testimonials = [
    {
      description: 'Working with Miriam was an absolute pleasure from start to finish...',
      date: 'March 30, 2025',
      img: 'https://i.postimg.cc/MTr9j4Yn/client1.jpg',
      name: 'Chen Xiuying',
      detail: 'Marketing Director',
    },
      {
      description: 'Working with Miriam was an absolute pleasure from start to finish...',
      date: 'March 30, 2025',
      img: 'https://i.postimg.cc/MTr9j4Yn/client1.jpg',
      name: 'Chen Xiuying',
      detail: 'Marketing Director',
    },
    // 
      {
      description: 'Working with Miriam was an absolute pleasure from start to finish...',
      date: 'March 30, 2025',
      img: 'https://i.postimg.cc/MTr9j4Yn/client1.jpg',
      name: 'Chen Xiuying',
      detail: 'Marketing Director',
    },
    // 
      {
      description: 'Working with Miriam was an absolute pleasure from start to finish...',
      date: 'March 30, 2025',
      img: 'https://i.postimg.cc/MTr9j4Yn/client1.jpg',
      name: 'Chen Xiuying',
      detail: 'Marketing Director',
    },
    // 
    // Add other testimonials similarly...
  ];

  return (
    <section id="testimonials" className="section">
      <h2 className="section-title" data-heading="My clients say">Testimonials</h2>
      <div className="testimonials-container container mx-auto px-20  swiper sm:max-w-9/12 max-w-11/12">
        <div className="swiper-wrapper">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card swiper-slide bg-gray-800 p-6 rounded-lg mb-12">
              <div className="testimonial-quote text-green-500 text-2xl mb-4"><i className="bx bxs-quote-alt-left"></i></div>
              <p className="testimonial-description text-sm text-justify mb-4">{testimonial.description}</p>
              <h3 className="testimonial-date text-base mb-4">{testimonial.date}</h3>
              <div className="testimonial-profile flex items-center gap-4">
                <Image src={testimonial.img} alt="" className="testimonial-profile-img w-16 h-16 rounded-full" />
                <div className="testimonial-profile-data">
                  <span className="testimonial-profile-name text-xl font-medium">{testimonial.name}</span>
                  <span className="testimonial-profile-detail text-sm block">{testimonial.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}