import React from 'react';

function Login() {
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();

  const Field = React.forwardRef(({ label, type }, ref) => {
    return (
      <div>
        <label class='text-2xl'>{label}</label>
        <input class='border-2 border-black mt-1' ref={ref} type={type} />
      </div>
    );
  });

  const handleSubmit = (e) => {};

  return (
    <>
      <h1 class='font-bold text-2xl mb-1'> Login </h1>
      <form onSubmit={handleSubmit}>
        <Field ref={usernameRef} label='Username:' type='text' />
        <Field ref={passwordRef} label='Password: ' type='password' />
        <br />
        <input
          class='bg-green-500 hover:bg-green-600 text-black text-xl font-bold py-1 px-3 rounded border-2 border-black'
          type='submit'
          value='Submit'
        />
        <button class='bg-yellow-500 hover:bg-yellow-600 text-black text-xl font-bold py-1 px-3 rounded border-2 border-black ml-4'>
          Back
        </button>
      </form>
    </>
  );
}

export default Login;
