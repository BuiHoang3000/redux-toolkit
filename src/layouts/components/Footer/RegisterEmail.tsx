import React from 'react';
//
import { Button } from '~/templates/Button';
import { Input } from '~/templates/Input';

const RegisterEmail = () => {
  const [email, setEmail] = React.useState('');

  const handleRegister = () => {};

  return (
    <div className='py-12 px-7 bg-gray-200 text-black'>
      <div className='mx-auto max-w-xl text-center'>
        <p className='uppercase text-2xl font-bold pb-7'>Newsletter sign up</p>
        <div className='text-sm font-bold pb-7'>
          Subscribe to the IU2000 newsletter to stay up to date with the latest
          designs
        </div>
        <div className='flex'>
          <Input
            value={email}
            placeholder='Enter your email ...'
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button className='ml-3' label='Register' onClick={handleRegister} />
        </div>
      </div>
    </div>
  );
};

export default RegisterEmail;
