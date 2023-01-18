import React, { useEffect, useState } from 'react';
import { BsCameraVideo } from 'react-icons/bs';
import { AiFillPlusSquare } from 'react-icons/ai';

import { BsSearch } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => setText(keyword || ''), [keyword]);

  return (
    <header className='w-full  mt-5 flex p-5 m-5 items-center  space-x-44  h-12 pb-10 text-1xl border-b border-gray-500' >
    <Link to='/' className='flex items-center '>
      <img className='w-60' src="https://download.logo.wine/logo/YouTube/YouTube-White-Full-Color-Logo.wine.png" alt="" />

    </Link>
    <form className=' w-full ' onSubmit={handleSubmit}>
      <input
        className='rounded-l-full w-7/12 p-4 h-12 outline-none bg-black text-gray-50'
        type='text'
        placeholder='Search...'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className='bg-zinc-600  rounded-r-full  h-11  px-6  '>
        <BsSearch />
      </button>
    </form>      
    < AiFillPlusSquare className=' flex-row items-cenh-9 m-0 p-0 w-20' />
    <BsCameraVideo className=' bh-zinc-300 h-7 w-14  m-0 p-0 '/>

  </header>
  );
}
