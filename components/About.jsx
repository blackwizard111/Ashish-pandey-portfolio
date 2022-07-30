import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/me.png";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <>
      <div
        id="about"
        className="w-full md:h-screen p-2 flex items-center  text-white py-8 bg-[#121212] "
      >
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="uppercase text-xl tracking-widest text-[#5651e5]">
              About
            </p>
            <h2 className="py-4 text-teal-500">Who I Am</h2>

            <p className="py-1 " data-aos="fade-up-right">
              I like to think that I’m a very flexible and resourceful person. I
              would say that I’m creative, hard-working, and detail-oriented. I
              am passionate about my work. Because I love what I do. I am
              ambitious and driven. I thrive on challenge and constantly set
              goals for myself, so I have something to strive toward. I’m not
              comfortable with settling, and I’m always looking for an
              opportunity to do better and achieve greatness.I am
              results-oriented, constantly checking in with the goal to
              determine how close or how far away we are and what it will take
              to make it happen. I find this pressure inspiring.
            </p>
            <p className="py-2 " data-aos="fade-up-right">
              One of the reasons I’m looking for tech jobs right now is that I
              want to work on large, important projects and challenge myself. I
              like to seek out learning opportunities and I’m not afraid to fail
              and struggle as a part of learning. I feel the tech industry is
              the best place to do this right now.
            </p>
            <p className="py-1 " data-aos="fade-up-right">
              One little thing about me...I am weird, weird is good. Normal is
              overrated.
            </p>
            <Link href="/#projects">
              <p
                className="inline-block py-2 animate__cursor underline cursor-pointer"
                data-aos="fade-up-right"
              >
                Check out some of my latest projects.
              </p>
            </Link>
          </div>
          <div className="w-full   shadow-xl shadow-slate-700 hover:shadow-slate-500 rounded-xl flex items-center justify-center p-8  ease-in duration-300 group">
            <Image
              src={AboutImg}
              className=" group-hover:scale-95 transition-all duration-200 ease-in-out"
              alt="/"
              data-aos="fade-up-left"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
