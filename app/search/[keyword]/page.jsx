"use client"
import Movies from '@/app/components/Movies';
import React, { useRef } from 'react';
import { GrArchlinux } from "react-icons/gr";


const Page = async ({ params }) => {
  const keyword = params.keyword;
  const moviesContainerRef = useRef(null);

  const scrollToTop = () => {
    moviesContainerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearch = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=6c14ff13bcecdf9def4d06cba56b506d&query=${keyword}&language=en-US&include_adult=false`
    );
    const data = await res.json();
    console.log(data, 'data');

    return data.results || [];
  };

  const handleLoadMore = async () => {
    // Load more logic
  };

  const movies = await handleSearch();

  return (
    <div>
      <div className="movies-container mb-20" ref={moviesContainerRef}>
        {movies.length > 0 &&
          movies.map((dt, i) => <Movies key={i} dt={dt} />)}
        {movies.length === 0 && <div>Aranılan şey bulunamadı...</div>}
      </div>
      {movies.length > 0 && (
        <div
          className="scroll-to-top flex justify-center mb-10 text-4xl  "
          onClick={scrollToTop}
        >
          <GrArchlinux className='text-cyan-400 cursor-pointer opacity-80 hover:opacity-100 ' />

        </div>
      )}
      
    </div>
  );
};

export default Page;
