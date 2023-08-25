import { Route, Routes } from 'react-router-dom';
import AdminNav from './pages/adminNav';
import Header from './pages/header';
import Orders from './pages/orders';
import Products from './products';

function AdminDashboard() {
    return (
       <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-grow"> 
          <AdminNav className="w-40"/>
          <div className='flex-grow bg-paleBlue'>
            <Routes>
              {/* Removed the AdminDashboard route to prevent infinite loops */}
              <Route path="orders" element={<Orders />} />
              <Route path="products" element={<Products />} />
            </Routes>
          </div>
        </div>
      </div>
    );
}

export default AdminDashboard;
