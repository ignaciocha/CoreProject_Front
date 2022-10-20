import './styles/App.css';
// import {Route, Routes} from 'react-router-dom';
import Header from './pages/main/Header';
import FilterBox from './components/Filter/FilterBox';

function App() {
  return (
   <div>
    <Header/>
    <FilterBox/>
   </div>


  );
}

export default App;
