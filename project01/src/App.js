import './styles/App.css';
// import {Route, Routes} from 'react-router-dom';
import Header from './pages/Header';
import FilterBox from './components/Filter/FilterBox';
import {Route, Routes} from 'react-router-dom'
import Main from './pages/Main'
import TeamRoom from './pages/TeamRoom';
import TeamSetting from './pages/TeamSetting';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

function App() {
  return (
   <div>
    <Header/>
    <FilterBox/>
    <TeamRoom/>

    
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/teamSetting' element={<TeamSetting/>}></Route>
      <Route path='*'></Route>
      <Route path='*'></Route>
      <Route path='*'></Route>
    </Routes>
    
   </div>
  );
}



export default App;
