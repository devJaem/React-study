import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layout/Layout';
import Main from './pages/Main';
import PokeomLib from './pages/PokeomLib';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="main" element={<Main/>}/>
          <Route path="pokemonlib" element={<PokeomLib/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
