import { Routes, Route } from 'react-router-dom';
import CharacterPage from './Components/Character-page';
import CharactersPage from './Components/Characters-page'
import SearchComponent from './Components/SearchComponent';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<CharactersPage />} />
      <Route path='/:id' element={<CharacterPage />} />
      <Route path='/search' element={<SearchComponent />} /> 
    </Routes>
  );
}

export default App
