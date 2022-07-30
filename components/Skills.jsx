import Image from "next/image";
import React, { useEffect } from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import Firebase from "../public/assets/skills/firebase.png";
import NextJS from "../public/assets/skills/nextjs.png";
import mongoDb from "../public/assets/skills/mongo.png";
import express from "../public/assets/skills/expressjs.png";
import sql from "../public/assets/skills/mysql.png";
import typescript from "../public/assets/skills/typescript.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div
      id="skills"
      className="w-full lg:h-screen  bg-[#121212] text-white pt-6"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h1
          className="text-4xl mb-5 text-teal-500 font-bold sm:text-5xl ml-4"
          data-aos="fade-in"
        >
          #What Can I Do
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            className=" mx-4 p-6 shadow-xl  bg-slate-900 rounded-2xl hover:bg-slate-600 animate__cursor  hover:scale-105 ease-in duration-300"
            data-aos="flip-up"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Html} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div
            className="mx-4 p-6 shadow-xl bg-slate-900 rounded-2xl hover:bg-slate-600 animate__cursorrounded-xl hover:scale-105 ease-in duration-300"
            data-aos="flip-up"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Css} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div
            className="mx-4 p-6 shadow-xl bg-slate-900 rounded-2xl hover:bg-slate-600 animate__cursorrounded-xl hover:scale-105 ease-in duration-300"
            data-aos="flip-up"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Javascript} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div
            className="mx-4 p-6 shadow-xl bg-slate-900 rounded-2xl hover:bg-slate-600 animate__cursorrounded-xl hover:scale-105 ease-in duration-300"
            data-aos="flip-up"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div
            className="mx-4 p-6 shadow-xl bg-slate-900 rounded-2xl hover:bg-slate-600 animate__cursorrounded-xl hover:scale-105 ease-in duration-300"
            data-aos="flip-up"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Tailwind} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div
            className="mx-4 p-6 shadow-xl bg-slate-900 rounded-2xl hover:bg-slate-600 animate__cursorrounded-xl hover:scale-105 ease-in duration-300"
            data-aos="flip-up"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Firebase} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div
            className="mx-4 p-6 shadow-xl bg-slate-900 rounded-2xl hover:bg-slate-600 animate__cursorrounded-xl hover:scale-105 ease-in duration-300"
            data-aos="flip-up"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Github} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div
            className="mx-4 p-6 shadow-xl bg-slate-900 rounded-2xl hover:bg-slate-600 animate__cursorrounded-xl hover:scale-105 ease-in duration-300"
            data-aos="flip-up"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NextJS} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next</h3>
              </div>
            </div>
          </div>
          <div
            className="mx-4 p-6 shadow-xl bg-slate-900 rounded-2xl hover:bg-slate-600 animate__cursorrounded-xl hover:scale-105 ease-in duration-300"
            data-aos="flip-up"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={mongoDb} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>mongoDb</h3>
              </div>
            </div>
          </div>
          <div
            className="mx-4 p-6 shadow-xl bg-slate-900 rounded-2xl hover:bg-slate-600 animate__cursorrounded-xl hover:scale-105 ease-in duration-300"
            data-aos="flip-up"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={express} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Express js</h3>
              </div>
            </div>
          </div>
          <div
            className="mx-4 p-6 shadow-xl bg-slate-900 rounded-2xl hover:bg-slate-600 animate__cursorrounded-xl hover:scale-105 ease-in duration-300"
            data-aos="flip-up"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={sql} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Sql</h3>
              </div>
            </div>
          </div>
          <div
            className="mx-4 p-6 shadow-xl bg-slate-900 rounded-2xl hover:bg-slate-600 animate__cursorrounded-xl hover:scale-105 ease-in duration-300"
            data-aos="flip-up"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={typescript} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>typescript</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
