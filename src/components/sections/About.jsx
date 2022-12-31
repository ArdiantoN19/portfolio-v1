import React from "react";

const About = () => {
  return (
    <section id="about" className="pt-32">
      <div className="container px-6 md:px-12 lg:px-40">
        <div className="flex items-center justify-start mb-8">
          <h3 className="text-light text-xl font-bold w-2/5 md:w-1/4 md:text-2xl lg:text-3xl xl:text-4xl">
            <span className="text-primary font-fira text-base md:text-xl lg:text-2xl xl:text-3xl">
              02.
            </span>{" "}
            About Me
          </h3>
          <span className="block w-3/5 md:w-3/4 h-[.8px] bg-slate-600"></span>
        </div>
        <div className="lg:flex">
          <div className="mb-20 lg:w-1/2">
            <p className="text-base leading-relaxed mb-4">
              I am an informatics engineering student from Singaperbangsa
              University, Karawang. I'm a web developer who is passionate about
              finding fast solutions to a problem and being able to collaborate
              with a team. Using HTML, CSS, JavaScript, PHP, and the React Js
              framework.
            </p>
            <p className="text-base leading-relaxed mb-4">
              I have built several website projects that I still use today. I
              hope to continue to increase my interest in website development
              and become a professional fullstack developer.
            </p>
            <p className="text-base leading-relaxed mb-4">
              I also just graduated from the studi independent at{" "}
              <a
                href="https://kampusmerdeka.kemdikbud.go.id/"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                Kampus Merdeka
              </a>{" "}
              x{" "}
              <a
                href="https://www.dicoding.com/"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                Dicoding
              </a>{" "}
              study program by becoming a front-end web developer who can build
              webs with React Js technology.
            </p>
            <p className="text-base leading-relaxed mb-4">
              Here are some of the technologies I've been using recently:
            </p>
            <div>
              <ul
                role="list"
                className="ml-5 font-fira text-[0.8rem] grid grid-cols-2 gap-1 center marker:text-primary list-disc "
              >
                <li>HTML 5</li>
                <li>CSS</li>
                <li>JavaScript (ES6+)</li>
                <li>Bootstrap</li>
                <li>Tailwind</li>
                <li>React Js</li>
              </ul>
            </div>
          </div>
          <div className="mb-4 lg:w-1/2">
            <div className="relative group">
              <img
                src="img/ardi.png"
                alt="profile"
                className="block bg-slate-100 brightness-95 grayscale mx-auto w-64 rounded group-hover:grayscale-0 "
              />
              <div className="absolute w-64 h-64 border border-primary top-5 right-7 md:right-48 md:top-4 lg:right-8 xl:right-24 rounded -z-10 transition-all ease-in-out duration-500 group-hover:top-4 group-hover:right-8 group-hover:md:right-[12.2rem] group-hover:lg:right-10 group-hover:lg:top-2 group-hover:xl:right-[6.5rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
