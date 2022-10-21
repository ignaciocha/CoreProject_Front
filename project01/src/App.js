import './styles/App.css';
// import {Route, Routes} from 'react-router-dom';
import Header from './pages/Header';
import FilterBox from './components/Filter/FilterBox';
import {Route, Routes} from 'react-router-dom'
import Main from './pages/Main'


function App() {
  return (
   <div>
    <Header/>
    <FilterBox/>

    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='*'></Route>
      <Route path='*'></Route>
      <Route path='*'></Route>
      <Route path='*'></Route>
    </Routes>
    
   </div>
  );
}

export default App;
