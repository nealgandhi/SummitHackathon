import React from 'react';

export default function Header() {
  return (
    <div>
      <nav class='flex px-8 bg-paleCerulean text-white justify-between'>
        <div class='flex items-center space-x-1'>
          <svg
            class='fill-white h-8 w-8 mr-2'
            width='54'
            height='54'
            viewBox='0 0 54 54'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z' />
          </svg>
          <span class='font-semibold text-xl tracking-tight'>Name</span>
          <span class='font-semibold text-xl tracking-tight'>
            United Shawties of America
          </span>
        </div>

        <div class='flex items-center space-x-3'>
          <a
            href='/login'
            class='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-beauBlue hover:bg-white m-4'
          >
            Login
          </a>
        </div>
      </nav>
    </div>
  );
}
