import React from "react";

export default function Hero() {
  return (
    <div>
      <div class="pt-24 bg-herobg bg-cover bg-gradient-to-r from-aliceBlue to-beauBlue pb-4 object-scale-down h-screen">
        <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center ">
          <div class="flex flex-col w-full md:w-2/5 justify-center items-center text-center md: text-left ml-8">
            <h1 class="my-4 text-5xl font-bold leading-tight">
              Manage your money all in one easy place!
            </h1>
            <p class="leading-normal text-2xl mb-8">
              Get started with your budget tracking today!
            </p>
            <button class="mx-auto lg:mx-0 hover:underline bg-paleCerulean text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Sign up/Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
