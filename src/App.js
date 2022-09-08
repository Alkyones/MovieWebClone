import './App.css';
import { useState , useEffect } from 'react';

//components
import { SearchBar } from './components/SearchBar/SearchBar';
import { Movie } from './components/MovieCard/Movie';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=2e554a2e'


const App = () => {
  const [movies, setMovies] = useState([])
  const [searchVal , setSearchVal] = useState('')
  
  
  useEffect(() => {
    search_movies('Batman')
  }, [])
  
  
  const search_movies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data  = await response.json()
    
    setMovies(data.Search)
  }
  
  console.log(movies[0])
  return (
  <div className='app'>
    <h1> MovieField</h1>
    <SearchBar searchValue={searchVal} setSearch ={setSearchVal} setNew = {search_movies}/>
    {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Movie movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
  </div>

  )
}

export default App
