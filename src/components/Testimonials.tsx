"use client"
{/*import React from "react";
import Image from "next/image";

const testimonials = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  name: `Client ${i + 1}`,
  username: `@client${i + 1}`,
  text: "Incredible team! and This service is just amazing! Highly recommend to everyone.",
  image: "/plc.jpg",
  
}));

const TestimonialsSection = () => {
  const firstRow = testimonials.slice(0, 10);
  const secondRow = testimonials.slice(10, 20);

  return (
    <section className=" py-10 px-6">
      {/*<h2 className="text-6xl text-green-500 font-extrabold text-center mb-12">
        What Our Clients Are Saying
      </h2>
      
      <p className="text-center text-white font-bold mb-8 max-w-2xl mx-auto">
        We are proud to have worked with some of the best clients in the industry.
        Here's what they have to say about us.</p>*/}
              {/*<h2 className="section-title" data-heading="My clients say">Testimonials</h2>


      {/* Masonry-like two rows 
      <div className="space-y-3">
        {/* First row - scroll left 
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left space-x-3">
            {firstRow.map((t) => (
              <div
                key={t.id}
                className="bg-gray-800 rounded-2xl shadow-md p-4 w-72 flex-shrink-0"
              >
                {/* Card header 
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-green-500 p-1 rounded-full">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="rounded-full border"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-white">{t.username}</p>
                  </div>
                </div>
                {/* Card body 
                <p className="text-white text-sm leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Second row - scroll right 
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-right space-x-3">
            {secondRow.map((t) => (
              <div
                key={t.id}
                className="bg-gray-800 rounded-2xl shadow-md p-4 w-72 flex-shrink-0"
              >
                {/* Card header 
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-green-500 p-1 rounded-full">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="rounded-full border"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-gray-200">{t.username}</p>
                  </div>
                </div>
                {/* Card body 
                <p className="text-white text-sm leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    
      <div className="mt-12 flex justify-center">

</div>

      {/* Animations 
      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-left {
          animation: scrollLeft 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scrollRight 40s linear infinite;
        }
      `}</style>

    </section>
  );
};

export default TestimonialsSection;*/}

import React from "react";
import Image from "next/image";

// Option 1: Create a comprehensive array with unique testimonials
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    username: "@sarahj_design",
    text: "Working with this team transformed our entire digital presence. The attention to detail is unmatched!",
    image: "/1.png",
  },
  {
    id: 2,
    name: "Michael Chen",
    username: "@mikec_startup",
    text: "Best investment we made for our startup. ROI was visible within the first month!",
    image: "/plc.jpg",
  },
  {
    id: 3,
    name: "Emmy Rodriguez",
    username: "@emma_creative",
    text: "Absolutely blown away by their creativity and professionalism. Highly recommend!",
    image: "/3.png",
  },
  {
    id: 4,
    name: "Cho Thompson",
    username: "@davidtech",
    text: "Technical expertise combined with great communication. A rare find in this industry.",
    image: "/4.png",
  },
  {
    id: 5,
    name: "Lisa Park",
    username: "@lisap_marketing",
    text: "They understood our vision perfectly and delivered beyond expectations. Amazing work!",
    image: "/5.png",
  },
  {
    id: 6,
    name: "Jane Wilson",
    username: "@jameswilson",
    text: "From concept to launch, every step was seamless. True professionals at their craft.",
    image: "/6.png",
  },
  {
    id: 7,
    name: "Maria Gonzalez",
    username: "@mariag_ceo",
    text: "Our conversion rates doubled after working with them. Results speak for themselves!",
    image: "/7.png",
  },
  {
    id: 8,
    name: "Alex Kumar",
    username: "@alexk_dev",
    text: "Clean code, modern design, and excellent support. Everything you could ask for.",
    image: "/t1.jpg",
  },
  {
    id: 9,
    name: "Rachel Green",
    username: "@rachelgreen",
    text: "They made the impossible possible. Our project was complex but they delivered flawlessly.",
    image: "/t3.jpg",
  },
  {
    id: 10,
    name: "Tom Anderson",
    username: "@tomanderson",
    text: "Outstanding service from start to finish. Will definitely work with them again!",
    image: "/t2.jpg",
  },
  {
    id: 11,
    name: "Sophie Martin",
    username: "@sophiem_brand",
    text: "Their strategic approach to branding completely transformed our market position.",
    image: "/p3.jpg",
  },
  {
    id: 12,
    name: "Ryan Clark",
    username: "@ryanc_founder",
    text: "Incredible turnaround time without compromising quality. Exactly what we needed!",
    image: "/a1.jpg",
  },
  {
    id: 13,
    name: "Jennifer Lee",
    username: "@jennlee_ops",
    text: "Project management was flawless. They kept us informed every step of the way.",
    image: "/p4.jpg",
  },
  {
    id: 14,
    name: "Carlos Rivera",
    username: "@carlosr_tech",
    text: "Modern solutions with a personal touch. They really care about their clients' success.",
    image: "/p2.jpg",
  },
  {
    id: 15,
    name: "Amanda White",
    username: "@amandaw_design",
    text: "Beautiful designs that actually convert. The perfect blend of form and function.",
    image: "/p5.jpg",
  },
  {
    id: 16,
    name: "Kevin Brown",
    username: "@kevinb_agency",
    text: "They saved us months of development time. Expertise and efficiency at its finest.",
    image: "/p6.jpg",
  },
  {
    id: 17,
    name: "Nicole Taylor",
    username: "@nicolet_startup",
    text: "From MVP to scale, they've been our trusted technology partner throughout.",
    image: "/p8.jpg",
  },
  {
    id: 18,
    name: "Marcus Johnson",
    username: "@marcusj_cto",
    text: "Technical depth and business acumen - a rare combination that delivers real results.",
    image: "/p9.jpg",
  },
  {
    id: 19,
    name: "Olivia Davis",
    username: "@oliviad_growth",
    text: "Our user engagement increased by 300%. Their data-driven approach works!",
    image: "/p10.jpg",
  },
  {
    id: 20,
    name: "Daniel Kim",
    username: "@danielkim_ux",
    text: "User experience is their superpower. Every interaction feels intuitive and delightful.",
    image: "/p11.jpg",
  },
];

const TestimonialsSection = () => {
  // Option A: Use all unique testimonials (no duplicates)
  // For truly seamless infinite scroll, you need enough content to fill more than the viewport
  const firstRowExtended = [...testimonials.slice(0, 10), ...testimonials.slice(0, 10)];
  const secondRowExtended = [...testimonials.slice(10, 20), ...testimonials.slice(10, 20)];

  // Option B: If you want NO duplicates at all, use this instead:
  // const firstRowExtended = testimonials.slice(0, 10);
  // const secondRowExtended = testimonials.slice(10, 20);
  // Note: This will cause a visible "jump" when animation restarts

  // Option C: Mix and match for more variety
  // const shuffled = [...testimonials].sort(() => Math.random() - 0.5);
  // const firstRowExtended = [...shuffled.slice(0, 10), ...shuffled.slice(10, 20)];
  // const secondRowExtended = [...shuffled.slice(5, 15), ...shuffled.slice(15, 25)];

  return (
    <section className="py-16 px-6 bg-black">
      <h2 className="section-title text-center mb-12" data-heading="My clients say">
        <h2 className=" font-extrabold text-white bg-clip-text ">
          Testimonials
        </h2>
      </h2>

      {/* Scrolling testimonials container */}
      <div className="space-y-6 overflow-hidden">
        {/* First row - scroll left */}
        <div className="relative">
          <div className="flex animate-scroll-left space-x-4">
            {firstRowExtended.map((testimonial, index) => (
              <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Second row - scroll right */}
        <div className="relative">
          <div className="flex animate-scroll-right space-x-4">
            {secondRowExtended.map((testimonial, index) => (
              <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-left {
          animation: scrollLeft 60s linear infinite;
          width: calc(288px * 20); /* card width * total cards */
        }
        
        .animate-scroll-right {
          animation: scrollRight 60s linear infinite;
          width: calc(288px * 20);
        }
        
        /* Pause animation on hover */
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

// Separate TestimonialCard component for better organization
// Define the testimonial type first
interface Testimonial {
  name: string;
  username: string;
  text: string;
  image: string; 
  // add any other properties your testimonial objects have
}

// Then use it in your component
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl p-6 w-72 flex-shrink-0 border border-gray-700 hover:border-green-500 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
    {/* Card header */}
    <div className="flex items-center space-x-4 mb-4">
      <div className="relative">
        <div className="bg-gradient-to-r from-green-400 to-blue-500 p-0.5 rounded-full">
          <div className="bg-gray-800 rounded-full p-1">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={44}
              height={44}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-bold text-white text-lg">{testimonial.name}</p>
        <p className="text-sm text-green-400">{testimonial.username}</p>
      </div>
    </div>
    
    {/* Card body */}
    <p className="text-gray-300 text-sm leading-relaxed">
  &quot;{testimonial.text}&quot;
</p>
    {/*<p className='text-gray-300 text-sm leading-relaxed'>
      "{testimonial.text}"
    </p>*/}
    
    {/* Star rating */}
    <div className="flex mt-4 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>
      ))}
    </div>
  </div>
);

export default TestimonialsSection;
