import React from 'react';
import { Link } from 'react-router-dom';
import ReactLogo from './computer.svg';

export default function DashboardHeader({ signOut }) {
  return (
    <div>
      <nav class='flex px-8 bg-paleCerulean text-white justify-between'>
        <div class='flex items-center space-x-1'>
          <img src={ReactLogo} width="50" height="50"></img>
          <span class='font-semibold text-xl tracking-tight'>BET</span>
        </div>

        <div class='flex items-center space-x-3'>
          <Link to='/'>
            <button
              onClick={signOut}
              href='/'
              class='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-beauBlue hover:bg-white m-4'
            >
              Sign out
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
