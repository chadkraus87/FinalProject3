import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { UPDATE_PRODUCT } from '../../utils/mutations';

function EditProductModal({ product, showEditModal, setShowEditModal }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState(product?.name || '');
  const [description, setDescription] = useState(product?.description || '');
  const [price, setPrice] = useState(product?.price || 0);

  const [isCustomColorSelected, setIsCustomColorSelected] = useState(false);

  const [updateProduct] = useMutation(UPDATE_PRODUCT);

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
  
    try {
      await updateProduct({
        variables: {
          productdata: {
            _id: product._id,
            name: title,
            animalType: e.target.category.value,
            sizes: [e.target.size.value],
            colors: [e.target.color.value],
            description: description,
            model: e.target.image.value,
            price: parseFloat(price),
          },
        },
      });
    } catch (err) {
      console.error(err);
    }
  
    // Redirect to the products page
    navigate('/adminDashboard/products');
  };

  if (!showEditModal) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-offWhite p-6 rounded-lg shadow-lg z-10">
        <form onSubmit={handleUpdateProduct}>
          <h2 className="text-xl font-bold mb-4">Update Product</h2>

          {/* Product Title */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-bold mb-2">Product Title:
              <input type="text" value={title} className="w-full p-2 border rounded" onChange={(e) => setTitle(e.target.value)} />
            </label>
          </div>

          {/* Product Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-bold mb-2">Description:</label>
            <input type="text" value={description}
              className="w-full p-2 border rounded"
              onChange={(e) => setDescription(e.target.value)} />
          </div>

          {/*  Model/Image */}
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-bold mb-2">Upload Model/Image:</label>
            <input type="file" id="image" name="image" className="w-full p-2 border rounded" />
          </div>

          {/* Uncomment me when we are ready for 3d objects */}
          {/* Model/ for 3D Model*/}
          {/* <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-bold mb-2">Upload a 3D Model file (.obj files only):</label>
            <input
              type="file"
              id="image"
              name="image"
              className="w-full p-2 border rounded"
              accept=".obj"
              onChange={(event) => {
                const file = event.target.files[0];
                if (file && !file.name.endsWith('.obj')) {
                  alert('Please select a valid .obj file');
                  event.target.value = null;  // Clear the input value
                }
              }}
            />
          </div> */}


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
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="color"
                value="custom color"
                className="form-checkbox ml-2"
                onChange={(e) => setIsCustomColorSelected(e.target.checked)}
              />
              <span className="ml-2 text-sm">Custom Color</span>
            </label>
            {isCustomColorSelected && (
              <input
                type="text"
                name="customColor"
                placeholder="Enter custom color"
                className="form-input ml-4 bg-offWhite rounded"
              />
            )}
          </div>

          {/* Price Input */}
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-bold mb-2">Price:</label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full p-2 border rounded" />
          </div>

          <button type="submit" className="bg-darkBlue text-white p-2 rounded">Update Product</button>
        </form>
        <button onClick={() => setShowEditModal(false)} className="text-deepCoral mt-4">Close</button>
      </div>
    </div>
  );
}

export default EditProductModal;