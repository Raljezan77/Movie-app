import React, { useEffect, useState} from "react";
import Movie from './components/Movie';

const FEATURED_API= " https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=640237c55f9723620b2ab827be3eb8aa&page=1";
const IMG_API= "https://image.tmdb.org/t/p/w1280";
const SEARCH_API= "https://api.themoviedb.org/3/search/movie?api_key=640237c55f9723620b2ab827be3eb8aa&query";




function App() {
  const [ movies, setMovies]= useState([]);
  const [searchTerm,setSearchTerm]= useState('');
  useEffect(() => {
    fetch (FEATURED_API)
    .then((res)=> res.json())
    .then((data)=>{ 
      setMovies(data.results);

    });


  },[]);
  const handleOnsubmit= (e) => {
    e.preventDefult(); 

    fetch (SEARCH_API + setSearchTerm)
    .then((res)=> res.json())
    .then((data)=>{ 
      setMovies(data.results);
    });

  };
  const handleOnchange =(e) =>{
setSearchTerm(e.target.value);
  }
  return ( 
    <>
    <header> 
      <form onSubmit={handleOnsubmit}> 
      <input className="search"
             type="search" 
             placeholder="Search..."
             value ={searchTerm}
             onChange={handleOnchange}
             />
      </form>
 </header>
    <div className="movie-container">
    
     {movies.length> 0&& movies.map ((movie) => (

       <Movie key ={movie.id} {...movie}/>
       
       ))}
       </div>
       </>
  );
}

export default App;
