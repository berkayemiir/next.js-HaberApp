"use client"
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MySlider = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          'https://api.themoviedb.org/3/trending/all/day?api_key=6c14ff13bcecdf9def4d06cba56b506d&language=en-US&page=1'
        );
        if (!res.ok) {
          throw new Error('API isteği başarısız.');
        }

        const data = await res.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Hata:', error.message);
      }
    };

    fetchMovies();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
   
      <Slider {...sliderSettings} className='mb-16'>
        {movies.map((movie) => (
          <div className='group relative'>
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div className="opacity-0 absolute bottom-0 left-0 w-full h-full bg-white group-hover:opacity-50">
              <div className="text-center text-3xl font-bold " style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                {movie.title ?? 'Anonymous'}
              </div>

            </div>
          </div>

        ))}
      </Slider>
    
  );
};

export default MySlider;



