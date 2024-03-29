import React from "react";
import Constant from "../_utils/Constant";

const Hero = () => {
  return (
    <div>
      <section class="bg-gray-900 text-white">
        <div class="mx-auto h-screen max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div class="mx-auto max-w-3xl text-center">
            <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Upload, Save and easily Share.
              <span class="sm:block"> your files in one place </span>
            </h1>

            <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
             {Constant.desc }
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <a
                class="block w-full rounded border border-blue-600 bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="#"
              >
                Get Started
              </a>

              <a
                class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
