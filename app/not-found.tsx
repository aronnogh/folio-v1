import React from 'react'
import HomeImg from "./error.png";
import Link from 'next/link';


const NotFound = () => {
  return (
    <section className="home grid h-screen pt-32 pb-16 w-full bg-black text-slate-400">
      <div className="home__container container grid content-center gap-12 lg:max-w-5xl lg:grid-cols-2 lg:items-center">
        <div className="home__data justify-self-center text-center lg:text-left">
          <p className="pb-2 font-semibold">Error 404</p>
          <h1 className="pb-4 text-5xl font-bold lg:text-6xl">Hey Buddy</h1>
          <p className="pb-8 font-semibold">
            We can&apos;t seem to find the page <br />
            you are looking for.
          </p>
          <Link
            href="./"
            className="inline-flex items-center justify-center rounded-full bg-white py-4 px-8 font-bold text-gray-900"
          >
            Go Home
          </Link>
        </div>

        <div className="home__img justify-self-center">
          <img
            src={"./error.png"}
            className="w-64 animate-floting lg:w-[400px]"
            alt="home image"
          />
          <div className="home__shadow mx-auto h-8 w-36 animate-shadow rounded-[50%] bg-gray-900/30 blur-md lg:w-64"></div>
        </div>
      </div>
    </section>
  )
}

export default NotFound
