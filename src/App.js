import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Header from './Component/Header/Header';
import NotFound from './Component/NotFound/NotFound';
import Footer from './Component/Footer/Footer';
import Review from './Component/Review/Review';
import Dashboard from './Component/Dashboard/Dashboard';
import Blogs from './Component/Blogs/Blogs';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/review' element={<Review />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
