import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';

function Movies({ movie }) {
  const [like, setLike] = useState(false);
  return (
    <div className="pl-6 relative w-[350px] transition-all duration-100 delay-300 ease-in-out hover:scale-125 ">
      <img
        className="max-w-[120px] h-[150px] block object-cover hover:border-2 rounded-br-lg rounded-tl-lg hover:border-white hover:border-bold"
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="absolute bg-red-600 rounded-br-lg top-0 p-2 right-o text-white">
        {like ? <AiFillHeart size={15} /> : <FaRegHeart size={15} />}
      </div>
    </div>
  );
}

export default Movies;
