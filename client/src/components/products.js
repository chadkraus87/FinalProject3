import React from 'react';
import dogClogs from '../images/dogClogs.png';
import dogSocks from '../images/dogSocks.png';
import kittenMittens from '../images/kittenMittens.png';
import catHat from '../images/pexels-alice-castro-catHat.png';

function Products() {
    const imageWidth = 240;
    const imageStyle = {
        width: `${imageWidth}px`,
        height: 'auto',
    };

    return (
        <div className="flex flex-col  bg-paleBlue">
            {/* Dog Container */}
            <div className='bg-darkBlue p-6 m-6 rounded flex flex-col'>
                <h2 className='text-xl text-offWhite font-bold'>Dog</h2>

                <div className='flex flex-row justify-evenly'>
                    <div className="bg-tan p-6 px-12 m-4 rounded shadow-md">
                        {/* Dog Clogs */}
                        <div className='bg-tan m-4 p-4 flex items-center'>
                            <img src={dogClogs} alt="dog clogs" style={imageStyle} />
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold">Dog Clogs</h3>
                                <p className="text-md">$50.00</p>
                                <button className="text-teal">Edit</button>
                                <button className="text-teal ml-2">Delete</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-tan p-6 px-12 m-4 rounded shadow-md">
                        {/* Dog Socks */}
                        <div className='bg-tan m-4 p-4 flex items-center'>
                            <img src={dogSocks} alt="dog socks" style={imageStyle} />
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold">Dog Socks</h3>
                                <p className="text-md">$30.00</p>
                                <button className="text-teal">Edit</button>
                                <button className="text-teal ml-2">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Cat Container */}
            <div className='flex flex-row bg-darkBlue p-6 m-6 rounded'>
            <h2 className='text-xl text-offWhite font-bold'>Cat</h2>

<div className='flex flex-row justify-evenly'>
    <div className="bg-tan p-6 px-12 m-4 rounded shadow-md">
        {/* Kitten Mittens */}
        <div className='bg-tan m-4 p-4 flex items-center'>
            <img src={kittenMittens} alt="kitten Mittens" style={imageStyle} />
            <div className="ml-4">
                <h3 className="text-lg font-semibold">Kitten Mittens</h3>
                <p className="text-md">$25.00</p>
                <button className="text-teal">Edit</button>
                <button className="text-teal ml-2">Delete</button>
            </div>
        </div>
    </div>
    <div className="bg-tan p-6 px-12 m-4 rounded shadow-md">
        {/* Cat Hats */}
        <div className='bg-tan m-4 p-4 flex items-center'>
            <img src={catHat} alt="cat in a hat" style={imageStyle} />
            <div className="ml-4">
                <h3 className="text-lg font-semibold">Cat Hat</h3>
                <p className="text-md">$30.00</p>
                <button className="text-teal">Edit</button>
                <button className="text-teal ml-2">Delete</button>
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    )
}

export default Products;