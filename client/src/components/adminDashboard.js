import { Route, Routes, Link } from 'react-router-dom';
import AdminNav from './pages/adminNav';
import Header from './pages/header';
import Orders from './pages/orders';
import Products from './pages/products';
// ... Other imports

function AdminDashboard() {
    return (
      <div>
        <div className="flex flex-col h-screen">
          <Header />
          <div className="flex flex-grow"> 
            <AdminNav className="w-40"/>
            <div className='flex-grow bg-paleBlue'>
            <Link to="orders">Orders</Link>
              <Routes>
                <Route path="orders" element={<Orders />} />
                <Route path="products" element={<Products />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AdminDashboard;
