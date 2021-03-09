import { useContext } from 'react';
import Context from '../context';
const Card = ({ movie }) => {
  const { list, setList } = useContext(Context);
  const { id, title, year, lang, director, stars, image } = movie;

  const updateList = (movie) => {
    //console.log('list =', list);
    //console.log('movie name =', movie.title);
    //console.log('id =', id);
    if (!list.includes(movie)) list.push(movie);
    setList(list);
    console.log('list after push = ', list);
  };

  return (
    <>
      <div className="card-container">
        <div className="card" onClick={() => updateList(movie)}>
          <div className="card-top">
            <ul>
              <li>
                <img src={image} alt="image cannot be displayed" />
              </li>
              <li>
                {title} - {year}
              </li>
            </ul>
          </div>
          <div className="card-details">
            <ul>
              <li>Language: {lang}</li>
              <li>Director: {director}</li>
              <li>Stars: {stars}</li>
            </ul>
          </div>
        </div>
        <span className="overlay">+</span>
      </div>
    </>
  );
};

export default Card;
