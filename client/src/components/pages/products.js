import React, { useState } from 'react';
import dogClogs from '../../images/dogClogs.png';
import dogSocks from '../../images/dogSocks.png';
import kittenMittens from '../../images/kittenMittens.png';
import catHat from '../../images/pexels-alice-castro-catHat.png';
import AddProductModal from './addProductModal';
import EditProductModal from './editProductModal';

function Products() {
    const imageWidth = 240;
    const imageStyle = {
        width: `${imageWidth}px`,
        height: 'auto',
    };

    const dogProducts = [
        { name: 'Dog Clogs', description: 'Protect your dogs paws when out on walks and keep them fasionable with these latex free rubber crocks for dogs!', price: 50, image: dogClogs },
        { name: 'Dog Socks', description:'Some time our furry friends need to keep their paws covered and warm. Dog socks to the rescue made from quality sourced cotton.', price: 30, image: dogSocks }
    ];

    const catProducts = [
        { name: 'Kitten Mittens', description: 'When you need to keep those claws at bay kitten mittens are just the thing. With fashion and safety in mind you kitty can play on furniture without you having to worry about a claw snagging anything', price: 25, image: kittenMittens },
        { name: 'Cat Hat', description: 'Every cat deserves to have their own wardrobe and no outfit is complete without a hat! Made from locally sourced materials.', price: 30, image: catHat }
    ];

             {/* Add product modal */}
    const [showModal, setShowModal] = useState(false);
            {/* Edit product modal */}
    const [editProduct, setEditProduct] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);    

    const handleEditClick = (product) => {
        setEditProduct(product);
        setShowEditModal(true);
      };
    return (
        <div className="flex flex-col bg-body">
            {/* Dog Container */}
            <div className='bg-darkBlue p-6 m-6 rounded flex flex-col shadow-lg'>
                <h2 className='text-xl text-offWhite font-bold'>Dog</h2>
                <div className='flex flex-row justify-evenly'>
                    {dogProducts.map(product => (
                        <div className="bg-tan p-6 px-12 m-4 rounded shadow-md" key={product.name}>
                            <div className='bg-tan m-4 p-4 flex items-center'>
                                <img src={product.image} alt={product.name} style={imageStyle} />
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold">{product.name}</h3>
                                    <p className="text-md">{product.description}</p>
                                    <p className="text-md">${product.price}.00</p>
                                    <button className="text-teal" onClick={() => handleEditClick(product)}>Edit</button>
                                    <button className="text-teal ml-2">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* Cat Container */}
            <div className='bg-darkBlue p-6 m-6 rounded flex flex-col shadow-lg'>
                <h2 className='text-xl text-offWhite font-bold'>Dog</h2>
                <div className='flex flex-row justify-evenly'>
                    {catProducts.map(product => (
                        <div className="bg-tan p-6 px-12 m-4 rounded shadow-md" key={product.name}>
                            <div className='bg-tan m-4 p-4 flex items-center'>
                                <img src={product.image} alt={product.name} style={imageStyle} />
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold">{product.name}</h3>
                                    <p className="text-md">{product.description}</p>
                                    <p className="text-md">${product.price}.00</p>
                                    <button className="text-teal" onClick={() => handleEditClick(product)}>Edit</button>
                                    <button className="text-teal ml-2">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center items-center shadow-lg"> 
            <button onClick={() => setShowModal(true)}
            className='bg-deepCoral text-offWhite rounded hover:bg-teal focus:border-yellow px-4 py-2'>Add New Product</button>
                </div>

      <EditProductModal product={editProduct} showEditModal={showEditModal} setShowEditModal={setShowEditModal} />

      <AddProductModal showModal={showModal} setShowModal={setShowModal} />
        </div>
        
    )
}

export default Products;