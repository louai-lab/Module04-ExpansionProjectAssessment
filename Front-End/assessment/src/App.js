import logo from './logo.svg';
import './App.css';
import { Route , Routes } from 'react-router-dom';
import AllProducts from './All-pages/AllProducts';
import Home from './All-pages/Home';
import Dashboard from './All-pages/Dashboard';
import Product from './All-pages/Product';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello world</h1> */}
      <Routes>
        <Route index path='/' element={<Home/>}></Route>
        <Route path='/AllProducts' element={<AllProducts/>}></Route>
        <Route path='/product/:productId' element={<Product/>}></Route>

        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
