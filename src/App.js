import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/blogs/Blogs';
import Dashboard from './components/dashboard/Dashboard';
import Error from './components/error/Error';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Menu from './components/menu/Menu';
import Reviews from './components/reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/reviews' element={<Reviews/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='*'  element={<Error/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
