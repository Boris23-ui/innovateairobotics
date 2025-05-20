import React, { useState, useEffect } from 'react';

const Carousel: React.FC = () => {
  const testimonials = [
    {
      quote: "The robotics program transformed my understanding of technology and opened new career opportunities.",
      author: "Sarah Johnson",
      role: "Robotics Engineer",
    },
    {
      quote: "The hands-on approach and expert guidance helped me build my first AI project successfully.",
      author: "Michael Chen",
      role: "AI Developer",
    },
    {
      quote: "An incredible learning experience that combines theory with practical applications.",
      author: "Emily Rodriguez",
      role: "Computer Science Student",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <p className="text-xl text-gray-600 italic mb-6">
                      "{testimonial.quote}"
                    </p>
                    <div className="text-right">
                      <p className="font-semibold text-gray-800">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel; 