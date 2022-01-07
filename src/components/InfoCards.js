import React from "react";

export default function InfoCards() {
  return (
    <div>
      <section class="bg-isabelline border-b py-8">
        <div class="container mx-auto flex flex-wrap pt-4 pb-12">
          <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center">
            Title
          </h1>
          <div class="w-full mb-4 ">
            <div class="h-1 mx-auto bg-gradient-to-r from-aliceBlue to-beauBlue w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-aliceBlue rounded-t rounded-b-none overflow-hidden shadow">
              <a
                href="#"
                class="flex flex-wrap no-underline hover:no-underline"
              >
                <div class="w-full font-bold text-xl px-6 mt-4">
                  Lorem ipsum dolor sit amet.
                </div>
                <p class="text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto bg-aliceBlue rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="flex items-center justify-start">
                <button class="bg-paleCerulean mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Action
                </button>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a
                href="#"
                class="flex flex-wrap no-underline hover:no-underline"
              >
                <div class="bg-aliceBlue w-full font-bold text-xl text-gray-800 px-6 pt-4">
                  Lorem ipsum dolor sit amet.
                </div>
                <p class="bg-aliceBlue text-gray-800 text-base px-6 pb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto bg-aliceBlue rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="flex items-center justify-center">
                <button class="bg-paleCerulean mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Action
                </button>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a
                href="#"
                class="flex flex-wrap no-underline hover:no-underline"
              >
                <div class="bg-aliceBlue w-full font-bold text-xl text-gray-800 px-6 pt-4">
                  Lorem ipsum dolor sit amet.
                </div>
                <p class="text-gray-800 bg-aliceBlue text-base px-6 pb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto bg-aliceBlue rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="flex items-center justify-end">
                <button class="bg-paleCerulean mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Action
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
