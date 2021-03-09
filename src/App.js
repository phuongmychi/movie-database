import './styles.css';
import Header from './components/header';
import Footer from './components/footer';
import Article from './components/article';
import Context from './context';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([
    // {
    //   id: 1,
    //   title: 'Gladiator',
    //   year: 2000,
    //   lang: 'English',
    //   director: 'Ridley Scott',
    //   stars: 'Russell Crowe',
    //   image: '/images/gladiator.jpg',
    // },
    // {
    //   id: 2,
    //   title: 'The Shawshank Redemption',
    //   year: 1994,
    //   lang: 'English',
    //   director: 'Frank Darabont',
    //   stars: 'Tim Robbins, Morgan Freeman',
    //   image: '/images/shawshankredemption.jpg',
    // },
  ]);

  return (
    <div className="container">
      <Context.Provider value={{ list, setList }}>
        <Header />
        <Article />
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
