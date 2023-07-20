import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  // Add other necessary fields here
}

interface RowProps {
  title: string;
  fetchURL: string;
  rowID: string;
}

const Row = ({ title, fetchURL, rowID }: RowProps) => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    axios.get(fetchURL)
      .then((response) => {
        if (response.data.hasOwnProperty('results')) {
          setMovies(response.data.results);
        } else {
          console.error('Hiba a lekérdezés során: hiányzik a "results" mező az API válaszból');
        }
      })
      .catch((error) => {
        console.error('Hiba a lekérdezés során:', error);
      });
  }, [fetchURL]);

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative'>
        <div id={`slider${rowID}`} className='flex gap-1'>
          {movies.length > 0 ? (
            movies.map((item: Movie, id: number) => (
              <div key={id} className='w-full '>
                <img
                  className='w-full h-auto'
                  src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                  alt={item?.title}
                />
              </div>
            ))
          ) : (
            <p>Nincsenek elérhető adatok</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Row;
