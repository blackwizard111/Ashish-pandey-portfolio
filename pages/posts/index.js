import Link from "next/link";
import React, { useEffect } from "react";
import { sanityClient, urlFor } from "../../sanity";

import AOS from "aos";
import "aos/dist/aos.css";
import HeadSection from "../../components/HeadSection";
const index = ({ posts }) => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <>
      <HeadSection title="posts" />
      <section className="flex flex-row flex-wrap mx-auto pt-28 bg-[#121212] text-white gap-4">
        {posts.map((post) => {
          return (
            <Link key={post._id} href={`/posts/${post.slug.current}`}>
              <div
                className="transition-all duration-150 flex w-full px-4 py-6 md:w-1/2 lg:w-1/3  animate__cursor "
                data-aos="zoom-in"
              >
                <div className="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-[#121212] rounded-lg shadow-lg  hover:shadow-white border-2 border-double border-white">
                  <div className="md:flex-shrink-0">
                    <img
                      src={urlFor(post.mainImage).url()}
                      alt="Blog Cover"
                      className="object-fill w-full rounded-lg rounded-b-none md:h-56"
                    />
                  </div>
                  <div className="flex items-center justify-between px-4 py-2 overflow-hidden">
                    <span className="text-xs font-medium text-blue-600 uppercase ">
                      {post.category}
                    </span>
                  </div>
                  <hr className="border-gray-300" />
                  <div className="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto">
                    <a href="#" className="hover:underline">
                      <h2 className="text-2xl font-bold tracking-normal capitalize ">
                        {post.title}{" "}
                      </h2>
                    </a>
                  </div>
                  <p className="flex flex-row flex-wrap w-full px-4  overflow-hidden text-sm text-justify line-clamp-3 ">
                    {post.description}
                  </p>
                  <span className="text-blue-600 px-4 hover:text-blue-400">
                    Read More
                  </span>

                  <section className="px-4 py-2 mt-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center flex-1">
                        <img
                          className="object-cover h-10 rounded-full"
                          src={urlFor(post.author.image).url()}
                          alt="Author"
                        />
                        <div className="flex flex-col mx-2">
                          <a href="" className="font-semibold  hover:underline">
                            {post.author.name}
                          </a>
                          <span className="mx-1 text-xs ">
                            {" "}
                            {new Date(post.publishedAt).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = `
*[_type=="post"]{
  _id,title,slug,mainImage,category,publishedAt,description,
  author->{
  name,image
}
}
`;
  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    },
  };
};

export default index;
