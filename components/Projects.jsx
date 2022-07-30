import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const works = [
    {
      name: "Landing Page Template",
      img: "https://cdn.dribbble.com/users/1728196/screenshots/14980421/media/2258e1a85da9ba90dd4112ad78293361.png?compress=1&resize=400x300",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, totam! Delectus ab nisi consectetur veritatis? Tempore consequatur cumque inventore voluptate? ",
      genre: "website",
    },
    {
      name: "Landing Page Template",
      img: "https://cdn.dribbble.com/users/1615584/screenshots/15016610/media/7b214fa3635c7727d860e6bfb55f282f.jpg?compress=1&resize=400x300",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, totam! Delectus ab nisi consectetur veritatis? Tempore consequatur cumque inventore voluptate? ",
      genre: "Figma Design",
    },
    {
      name: "Property Seller Website",
      img: "https://cdn.dribbble.com/users/1615584/screenshots/15871130/media/9a8ae8263ee90fce37cbd2f16feeb9ed.jpg?compress=1&resize=400x300",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, totam! Delectus ab nisi consectetur veritatis? Tempore consequatur cumque inventore voluptate? ",
      genre: "website",
    },
    {
      name: "Marketing Agency Website",
      img: "https://cdn.dribbble.com/users/2064121/screenshots/15584661/media/16ff7773b4c7974803ed09310482324a.png?compress=1&resize=400x300",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, totam! Delectus ab nisi consectetur veritatis? Tempore consequatur cumque inventore voluptate? ",
      genre: "website",
    },
    {
      name: "Landing Page Temaplate ",
      img: "https://cdn.dribbble.com/users/2125046/screenshots/14494079/media/696f417346fe3a77b7a4ad317fb0e2ad.jpg?compress=1&resize=400x300&vertical=top",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, totam! Delectus ab nisi consectetur veritatis? Tempore consequatur cumque inventore voluptate? ",
      genre: "Figma Design",
    },
    {
      name: "Website Landing Page",
      img: "https://cdn.dribbble.com/users/3791009/screenshots/15074739/media/fe9f5216d53e1db5f9f707f38fd0a0d9.png?compress=1&resize=400x300",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, totam! Delectus ab nisi consectetur veritatis? Tempore consequatur cumque inventore voluptate? ",
      genre: "website",
    },
  ];
  return (
    <>
      <div
        className=" m-auto p-4 pt-8 px-2 sm:pt-20 bg-[#121212]"
        id="projects"
      >
        <h1 className="text-4xl mb-5 text-teal-500 font-bold sm:text-5xl ml-14">
          #Latest Works
        </h1>
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:mx-0">
          {works.map((work, index) => (
            <div
              key={index}
              className="bg-slate-900 hover:bg-slate-800 rounded-lg p-4 max-w-3xl mx-auto mb-4 w-11/12 grid grid-cols-1 gap-0 ease-in-out duration-150 transition-all sm:mb-0 group "
              data-aos="flip-up"
            >
              <div className="w-45 flex justify-center items-center">
                <img
                  className="rounded-lg w-100 transition-all group-hover:scale-95"
                  src={work.img}
                  alt="Work-Image"
                />
              </div>
              <div className="flex flex-col justify-center items-start w-55 pb-0">
                <h2 className="text-2xl text-white font-bold my-5 mb-2">
                  {work.name}
                </h2>
                <b className="text-teal-500 mb-2">⎯⎯ {work.genre}</b>
                <p className="text-gray-300 text-sm leading-6 m-0">
                  {work.description}
                </p>
                <div className="flex gap-5">
                  <a
                    href="#"
                    className="inline-flex items-center mt-4 py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {work.genre == "Figma Design" ? "View Design" : "View Site"}
                    <svg
                      aria-hidden="true"
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className={
                      work.genre == "website"
                        ? "inline-flex items-center mt-4 py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        : "hidden"
                    }
                  >
                    View Github
                    <svg
                      aria-hidden="true"
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
