import { Route, Routes, Switch } from 'react-router-dom';
import AdminNav from './pages/adminNav';
import Header from './pages/header';
import Orders from './pages/orders';
import Products from './pages/products';
import Customers from './pages/customers';
import Messages from './pages/messages';
import AdminReviews from './pages/reviews';
import Reports from './pages/reports';
import MainDashboard from './pages/mainDashBoard';
import AdminProfile from './pages/adminProfile';

function AdminDashboard() {
    return (
      <div className='bg-body'>
        <div className="flex flex-col h-screen ">
          <Header />
        
            <div className='flex-grow'>
           
              <Routes>
                <Route path="/" element={<MainDashboard />} />
                <Route path="orders" element={<Orders />} />
                <Route path="products" element={<Products />} />
                <Route path="customers" element={<Customers />} />
                <Route path="messages" element={<Messages />} />
                <Route path="reviews" element={<AdminReviews />} />
                <Route path="reports" element={<Reports />} />
                <Route path="/profile" element={<AdminProfile />} />

              </Routes>
            </div>
          </div>
        </div>
      
    );
}

export default AdminDashboard;
