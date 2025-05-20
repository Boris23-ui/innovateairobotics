import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Programs from '../components/Programs';
import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[rgb(245,244,237)] opacity-90"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Empowering Minds with AI Robotics
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join us on a journey where minds of all ages can discover the endless possibilities of AI robotics
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/programs" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Explore Programs
            </Link>
            <Link href="/donate" className="bg-white text-blue-600 px-8 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-200">
              Donate Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe in empowering the next generation of innovators through hands-on robotics education focused on Artificial Intelligence.
              </p>
              <p className="text-lg text-gray-600">
                Our vision is to demystify robotics technology.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600">
                InnovateAI Robotics mission is to become the global leader in offering a dynamic learning environment where learners can explore the exciting world of AI and robotics; through interactive workshops, projects, and competitions, we aim to nurture creativity, critical thinking, and problem-solving skills in our learners of all ages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <Programs />

      {/* Class Demonstration Section */}
      <section className="py-20" style={{ backgroundColor: 'rgb(245,244,237)' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/class-demonstration.jpg"
                alt="Class demonstration with parents and students"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Hands-on Learning Experience</h2>
              <p className="text-lg text-gray-600 mb-6">
                Demonstration of class being run by a teacher, while parents are helping their kids build simple machine.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Understanding gears is vital for robotics students, enabling them to optimize robot mechanics beyond programming. This knowledge enhances the design of efficient mechanisms, improving speed, torque, and overall performance.
              </p>
              <p className="text-lg text-gray-600">
                Students develop hands-on problem-solving skills and a deeper understanding of mechanical design by experimenting with gear ratios. This knowledge fosters the creation of more effective robots, encouraging innovation beyond programming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <Carousel />

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our experienced instructors guide students in building and programming robots, fostering a deep understanding of AI concepts and technologies.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
              Get in Touch
            </Link>
            <Link href="/donate" className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-200">
              Donate Now
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-2xl text-blue-600 font-semibold mb-8">
            +1 (650) 619-4676
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join us on a journey where minds of all ages can discover the endless possibilities of AI robotics and demystify technology while unleashing their potential to shape the future.
          </p>
        </div>
      </section>
    </MainLayout>
  );
} 