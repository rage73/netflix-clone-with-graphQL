import './App.css';
import { useEffect, useState } from 'react';
import Section from './components/section';
import NavBar from './components/navBar';
import HeroSection from './components/heroSection';

const App = () => {
  
  const genreIncrement = 4;

  const [genres, setGenres] = useState(null); 
  const [limit, setLimit] = useState(genreIncrement);

  const fetchData = async () => {
    const response = await fetch("/.netlify/functions/getGenres", {
      method: "POST",
      body: limit
    });
    const responseBody = await response.json();
    setGenres(responseBody.data.reference_list.values);
  }

  useEffect(() => {
    fetchData();
  }, [limit])

  return (
    <>
      <NavBar/>
      <HeroSection/>
      {genres && (
        <div className="container"> 
          {Object.values(genres).map((genre, index) => (<Section key={index} genre={genre.value}/>))}
        </div>
      )}
      <div className="page-end" onMouseEnter={() =>{
        setLimit(limit + genreIncrement);
      }}/>
    </>
  );
}

export default App;
