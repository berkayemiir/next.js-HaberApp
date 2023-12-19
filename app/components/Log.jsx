// ./app/components/Log.jsx
"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Log = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = () => {
    // Kullanıcı adı ve şifreyi kontrol et
    if (username === 'berkayemiir@gmail.com' && password === '180698') {
      // Başarılı giriş
      alert('Başarılı giriş!');
      setLoginSuccess(true);
    } else {
      // Başarısız giriş
      alert('Başarısız giriş. Lütfen tekrar deneyin.');
      setLoginSuccess(false);
    }
  };

  return (
    <div className='flex justify-center items-center mt-20 mb-28'>
      <div className='w-450 text-center bg-neutral-300  rounded-sm'>
        <h1 className='text-2xl mb-10 font-bold mt-14'>Kullanıcı Girişi</h1>
        <label className='block mb-8'>
          <p className='font-bold'>E-Posta</p>
          <input className='w-96  bg-white text-black rounded-sm  font-bold opacity-80  ' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label className=''>
          <p className='font-bold'>Şifre</p>
          <input className='w-96  bg-white text-black rounded-sm font-bold opacity-80  ' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button className='w-96   h-14 bg-white text-black rounded-sm mt-8 mb-24 font-bold opacity-80  shadow  duration-300 hover:border hover:border-cyan-400 hover:opacity-100' onClick={handleLogin}>
          Giriş
        </button>

        {/* Giriş başarılıysa Link'i göster */}
        {loginSuccess && (
          <Link href='/profil' className='text-white bg-cyan-400 h-14 border-none rounded-md mt-8 mb-24 font-bold opacity-80 hover:opacity-100 inline-block text-center w-96' style={{paddingTop: '15px'}}>
            Profil Sayfasına Git
          </Link>
        )}
      </div>
    </div>
  );
};

export default Log;
