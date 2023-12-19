import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';
import 'moment/locale/tr';

const Movies = ({ dt }) => {
  return (
    <Link href={`/movie/${dt?.id}`} className=' relative imgContainer cursor-pointer text-white w-80 max-w-sm bg-white opacity-90 border border-gray-200  rounded-lg shadow  duration-300 hover:border hover:border-cyan-400 dark:bg-gray-800 dark:border-gray-700 hover:opacity-100 col-span-6 lg:col-span-3'>
      <Image className="rounded-t-lg text-white h-80 " style={{ objectFit: 'cover' }}
        width={320}
        height={300}
        src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`} alt="" />
      <div className="p-3">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
          {dt?.title ? (
            dt.title
              .toLowerCase()
              .replace(/\b\w/g, (char) => char.toUpperCase())
          ) : (
            'Anonymous'
          )}
        </h5>
        <p className="mb-3 text-gray-700 dark:text-gray-400  ">{moment(dt?.release_date).format("DD MMMM YYYY") ?? '11.10.2022'}</p>
      </div>
    </Link>
  );
};

export default Movies;