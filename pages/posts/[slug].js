import React, { useState, useEffect } from "react";
import { sanityClient, urlFor } from "../../sanity";
import PortableText from "react-portable-text";
import { useForm } from "react-hook-form";
import Navbar from "../../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import HeadSection from "../../components/HeadSection";
const post = ({ post }) => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    fetch("/api/createComment", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
        setSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
        setSubmitted(false);
      });
  };

  return (
    <>
      <HeadSection title={`${post.slug.current}`} />
      <main className="bg-[#121212] text-white">
        <Navbar />

        <article className="mx-auto max-w-3xl p-5  " data-aos="zoom-in">
          <div
            className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
            style={{ height: "24em" }}
          >
            <div
              className="absolute left-0 bottom-0 w-full h-full z-10"
              style={{
                backgroundImage:
                  "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
              }}
            ></div>
            <img
              src={urlFor(post.mainImage).url()}
              className="absolute left-0 top-0 w-full h-full z-0 object-cover"
            />
            <div className="p-4 absolute bottom-0 left-0 z-20">
              <a
                href="#"
                className="px-4 py-1 bg-black text-blue-700 inline-flex items-center justify-center mb-2"
              >
                {post.category}
              </a>
              <h2 className="text-4xl font-semibold text-gray-100 leading-tight capitalize">
                {post.title}
              </h2>
              <div className="flex mt-3">
                <img
                  src={urlFor(post.author.image).url()}
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-200 text-sm">
                    {post.author.name}
                  </p>
                  <p className="font-semibold text-gray-400 text-xs">
                    {new Date(post._createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              content={post.body}
              serializers={{
                h1: (props) => (
                  <h1 className="my-5 text-2xl font-bold" {...props} />
                ),
                h2: (props) => (
                  <h1 className="my-5 text-xl font-bold" {...props} />
                ),
                p: (props) => <p className="my-5" {...props} />,
                li: ({ children }) => (
                  <li className="ml-4 list-disc">{children}</li>
                ),
                link: ({ children, href }) => (
                  <a href={href} className="text-blue-500 hover:underline">
                    {children}
                  </a>
                ),
              }}
            />
          </div>
        </article>
        <hr className="my-5 mx-auto max-w-lg border border-yellow-500" />
        {submitted ? (
          <div className="my-10 mx-auto flex max-w-2xl flex-col bg-yellow-500 p-10 text-white">
            <h3 className="text-3xl font-bold">
              Thank you for submitting you comment!
            </h3>
            <p>Once it has been approved, it will appear below!</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto mb-10 flex max-w-2xl flex-col p-5"
          >
            <h3 className="text-sm text-yellow-500">Enjoyed this article?</h3>
            <h4 className="text-3xl font-bold">Leave a comment below!</h4>
            <hr className="mt-2 py-3" />

            <input
              {...register("_id")}
              type="hidden"
              name="_id"
              value={post._id}
            />

            <label className="mb-5 block">
              <span>Name</span>
              <input
                {...register("name", { required: true })}
                className="form-input text-black mt-1 block w-full rounded bg-gray-300 border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring"
                placeholder="Ashish"
                type="text"
              />
            </label>
            <label className="mb-5 block">
              <span>Email</span>
              <input
                {...register("email", { required: true })}
                className="form-input text-black e mt-1 block w-full  bg-gray-300 rounded border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring"
                placeholder="asespandey2@gmail.com"
                type="email"
              />
            </label>
            <label className="mb-5 block">
              <span>Comment</span>
              <textarea
                {...register("comment", { required: true })}
                className="form-textarea mt-1 text-black block w-full bg-gray-300 rounded border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring"
                placeholder="Awesome Dude"
                rows={8}
              />
            </label>

            <div className="flex flex-col p-5">
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
              {errors.comment && (
                <span className="text-red-500">Comment is required</span>
              )}
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>

            <input
              type="submit"
              className="focus:shadow-outline cursor-pointer rounded-sm bg-yellow-500 py-2 px-4 font-bold text-white shadow hover:bg-yellow-400 focus:outline-none"
            />
          </form>
        )}
        <div className="my-10 mx-auto flex max-w-2xl flex-col space-y-2 p-10 shadow shadow-yellow-500">
          <h3 className="text-4xl">Comments</h3>
          <hr className="pb-2" />

          {post.comments.map((comment) => (
            <div key={comment._id}>
              <p>
                <span className="text-yellow-500">{comment.name}: </span>
                {comment.comment}
              </p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default post;

export const getStaticPaths = async () => {
  const query = `*[_type=="post"]{
        _id,
        slug{
        current
        }
      }`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const query = `*[_type=="post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        author->{
          name,
          image
        },
       'comments':*[
         _type=="comment" &&
         post._ref==^._id &&
         approved == true],
        description,
        mainImage,
        body,
        slug
    }`;

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};
