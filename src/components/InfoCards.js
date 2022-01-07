import React from "react";

export default function InfoCards() {
  return (
    <div>
      <section class="bg-isabelline py-8">
        <div class="container mx-auto flex flex-wrap pt-4 pb-12">
          <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center">
            Packed with features for your convenience!
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
                <div class="w-full font-bold text-xl px-6 mt-4 pb-4 ">
                  Track your expenses with ease!
                </div>
                <p class="text-base px-6 mb-5">
                  Keeping track of your spending couldn't be easier! Just enter
                  the category and dollar amount for your purchase and your
                  budget for the last month with be ready just like that!
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto bg-aliceBlue rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="flex items-center justify-start"></div>
            </div>
          </div>
          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-aliceBlue rounded-t rounded-b-none overflow-hidden shadow">
              <a
                href="#"
                class="flex flex-wrap no-underline hover:no-underline"
              >
                <div class="bg-aliceBlue w-full font-bold text-xl text-gray-800 px-6 mt-4 pb-4">
                  Access your budget anywhere!
                </div>
                <p class="bg-aliceBlue text-gray-800 text-base px-6 pb-5">
                  Every time you enter an expense, a pie chart will update with
                  your expense distribution. And with built-in ring light
                  integration, you'll be able to see how your spending looks
                  outside of your computer screen too!
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto bg-aliceBlue rounded-b rounded-t-none overflow-hidden shadow p-6"></div>
          </div>
          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-aliceBlue rounded-t rounded-b-none overflow-hidden shadow">
              <a
                href="#"
                class="flex flex-wrap no-underline hover:no-underline"
              >
                <div class="bg-aliceBlue w-full font-bold text-xl text-gray-800 px-6 pt-4 pb-4">
                  Keep your personal information safe!
                </div>
                <p class="text-gray-800 bg-aliceBlue text-base px-6 pb-5">
                  With AWS authentication, your data is easily accessible, but
                  only to you. Everything in your account is locked behind
                  encryption for maximum security. Your personal financial data
                  will be safe and sound!
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto bg-aliceBlue rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="flex items-center justify-end"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
