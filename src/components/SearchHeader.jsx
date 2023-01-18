import React, { useEffect, useState } from 'react';
import { SiYoutubetv } from 'react-icons/si';
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
    <header className='w-full mt-5 flex p-5 m-5 items-center  space-x-44  h-12 pb-10 text-1xl border-b border-gray-500' >
    <Link to='/' className='flex items-center '>
      <img src="" alt="" />
      <SiYoutubetv className='flex  items-stretch justify-center  text-9xl  text-brand ' />
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
  </header>
  );
}
