import './App.css';
import LinkCompo from './Handsonfourth/LinkCompo';
import RouteCompo from './Handsonfourth/RouteCompo';
import  { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <LinkCompo/>
    <RouteCompo/>
    </BrowserRouter>
  );
}

export default App;
