import React from "react";
import image from "../images/imageDJ.jpg";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div class="w-6/12 sm:w-4/12 px-4 pr-9 flex flex-wrap justify-center">
          <img
            className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
            alt="Divyajyothi Guttula"
            src={image}
            
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 pl-9 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hey, I'm Divyajyothi
            
          </h1>
          <h3 className="sm:text-3xl text-2xl font-small title-font text-white mb-4 text-center">
          I love to bring your Web Vision alive
          </h3>
          <p className="mb-8 leading-relaxed">
            I am an Electrical Engineer by education, Security Analyst by
            experience and destined to be a Web developer by passion. I believe
            either one should create an opportunity to learn by themselves or
            the life should give. My journey from University education till
            today gave me some, and I grabbed myself some, which made me evolve
            into who I am today. I am a go-getter and well-versed in Full-stack
            web development. I am a communicative team player and strive to gain
            knowledge and inspiration from people around me. I am not afraid to
            go outside of my comfort zone. I like meeting new people. I am an
            accountable quick learner with open-mindedness.<br/> I am a mother to 5 years old wonderful kid. I love to
            cook and share a special interest in Photography, reading Indian
            epics and volunteering in my free time.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}
