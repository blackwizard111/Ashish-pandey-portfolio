import Link from "next/link";
import React, { useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill, BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div id="home" className="w-full h-screen text-center bg-[#121212]">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p
            className="uppercase text-sm tracking-widest text-gray-600"
            data-aos="fade-in"
          >
            Expect nothing less than perfect.
          </p>
          <h1 className="py-4 text-[#fff]" data-aos="fade-in">
            Hi, I&#39;m
            <span className="gradient__color transition-all" data-aos="zoom-in">
              Ashish
            </span>
          </h1>
          <h1 className="py-2 text-[#fff]" data-aos="fade-up-right">
            {" "}
            A Full-Stack Web Developer
          </h1>
          <p
            className="py-4 text-gray-500 sm:max-w-[70%] m-auto"
            data-aos="fade-down-right"
          >
            There are three responses to a piece of design — yes, no, and WOW!
            Wow is the one I aim for.
          </p>
          <div
            className="flex items-center justify-between max-w-[330px] m-auto py-4"
            data-aos="slide-up"
          >
            <a
              href="https://www.instagram.com/pandeyases17/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full animate__cursor shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300  bg-gray-600  hover:shadow-slate-500 hover:bg-gray-300">
                <BsInstagram />
              </div>
            </a>
            <a
              href="https://github.com/Pandeyashish17"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="rounded-full animate__cursor shadow-lg  p-6 cursor-pointer hover:scale-110 ease-in duration-300  bg-gray-600
                hover:shadow-slate-500
                hover:bg-gray-300"
              >
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full animate__cursor shadow-lg  p-6 cursor-pointer hover:scale-110 ease-in duration-300  bg-gray-600  hover:shadow-slate-500 hover:bg-gray-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/#resume">
              <div className="rounded-full animate__cursor shadow-lg  p-6 cursor-pointer hover:scale-110 ease-in duration-300  bg-gray-600  hover:shadow-slate-500 hover:bg-gray-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
