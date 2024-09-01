import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import { AppProvider } from './context';
import Users from './pages/Users';
import Products from './pages/Products';
import Breadcrumb from "./components/Breadcrumb";

function App() {

    const breadcrumbPaths = [
        { label: 'Home', url: '/' }
    ];
  return (
      <AppProvider>
          <Router>
              <nav>
                  <Link to="/users">Users</Link>
                  <Link to="/products">Products</Link>
              </nav>
              <Outlet/>
              <Routes>
                  <Route exact path="/users" element={<Users/>}/>
                  <Route exact path="/products" element={<Products/>}/>
              </Routes>

          </Router>
      </AppProvider>
  );
}

export default App;
