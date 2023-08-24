import React from 'react';
import { useNavigate } from 'react-router-dom';

function AddProductModal({ showModal, setShowModal }) {
  const navigate = useNavigate();

  const handleAddProduct = (e) => {
    e.preventDefault();
   
    // Redirect to the products page
    navigate('/admin/products');
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="bg-offWhite p-6 rounded-lg shadow-lg z-10">
      <h2 className="text-xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleAddProduct}>
        
        {/* Product Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-bold mb-2">Product Title:</label>
          <input type="text" id="title" name="title" className="w-full p-2 border rounded" />
        </div>

        {/* Upload Model/Image */}
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-bold mb-2">Upload Model/Image:</label>
          <input type="file" id="image" name="image" className="w-full p-2 border rounded" />
        </div>

        {/* Category Dropdown */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-bold mb-2">Category:</label>
          <select id="category" name="category" className="w-full p-2 border rounded">
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
          </select>
        </div>

 {/* Size Selection */}
 <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Size:</label>
          <label className="inline-flex items-center mr-4">
            <input type="checkbox" name="size" value="sm" className="form-checkbox" />
            <span className="ml-2 text-sm">Small</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input type="checkbox" name="size" value="md" className="form-checkbox" />
            <span className="ml-2 text-sm">Medium</span>
          </label>
          <label className="inline-flex items-center">
            <input type="checkbox" name="size" value="lg" className="form-checkbox" />
            <span className="ml-2 text-sm">Large</span>
          </label>
        </div>

        {/* Color Selection */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Color:</label>
          <label className="inline-flex items-center mr-4">
            <input type="checkbox" name="color" value="yellow" className="form-checkbox" />
            <span className="ml-2 text-sm">Yellow</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input type="checkbox" name="color" value="black" className="form-checkbox" />
            <span className="ml-2 text-sm">Black</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input type="checkbox" name="color" value="purple" className="form-checkbox" />
            <span className="ml-2 text-sm">Purple</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input type="checkbox" name="color" value="pink" className="form-checkbox" />
            <span className="ml-2 text-sm">Pink</span>
          </label>
          <label className="inline-flex items-center">
            <input type="checkbox" name="color" value="blue" className="form-checkbox" />
            <span className="ml-2 text-sm">Blue</span>
          </label>
        </div>

        {/* Price Input */}
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-bold mb-2">Price:</label>
          <input type="text" id="price" name="price" className="w-full p-2 border rounded" />
        </div>
        <button type="submit" className="bg-darkBlue text-white p-2 rounded">Add Product</button>
      </form>
      <button onClick={() => setShowModal(false)} className="text-deepCoral mt-4">Close</button>
    </div>
  </div>
  );
}

export default AddProductModal;
