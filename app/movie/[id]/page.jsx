import React from 'react';
import Image from 'next/image';

const getMovie = async (id) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6c14ff13bcecdf9def4d06cba56b506d`)
  return await res.json();
}

const Page = async ({ params }) => {
  const id = params.id;
  const movieDetail = await getMovie(id);

  return (
    <div className='flex justify-center items-center h-screen bg-neutral-100 mb-4 '>
      <div className='relative p-7 mb-14 text-white '  style={{ top: '-180px' }}>
        <Image className='rounded-t-lg w-700 h-400 mt-24' style={{ objectFit: "cover" }}
          width={700}
          height={400}
          src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`}
        />
        <div className='absolute mt-4 rounded-lg text-black'>
          <h5 className='mb-2 text-2xl font-bold'style={{ borderBottom: '2px solid #000', display: 'inline-block' }}  >{movieDetail?.title}</h5>
          <p className='mb-3 font-normal'>{movieDetail?.overview}</p>
          <h5 className='my-3 font-bold'>{movieDetail?.release_date}</h5>
          <h5 className='my-3 font-bold'>İMDB:{movieDetail?.vote_average}</h5>
        </div>
      </div>
    </div>
  );
}

export default Page;
