import { useState, useContext, useEffect } from 'react';
import Context from '../context';

const List = () => {
  const { list, setList } = useContext(Context);
  console.log('list = ', list);

  const clearList = () => {
    setList([]);
  };

  const removeMovie = (title) => {
    console.log('removed', title);
    console.log('list inside removeMovie=', list);
    setList(list.filter((item) => item.title !== title));
  };

  return (
    <div>
      <button className="btn" onClick={clearList}>
        clear
      </button>
      <div>
        <ul className="my-list">
          {list.map((item) => {
            return (
              <li>
                <button
                  className="btn remove-button"
                  onClick={() => removeMovie(item.title)}
                >
                  x
                </button>
                <span>{item.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default List;
