import data from '../data';
import Card from './card';
import { useState, useEffect } from 'react';
import List from './list';

const Article = () => {
  const [movies] = useState(data);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h3>Movies</h3>
            <div className="col flex-container">
              {movies.map((movie) => {
                return (
                  <div>
                    <Card movie={movie} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col text-center">
            <h3>My List</h3>
            <List />
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
