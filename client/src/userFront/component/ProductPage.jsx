import * as React from 'react';
import SizeButtons from './Sizes'
import ColorButtons from './Colors'
import IconLabelButtons from './CheckoutBtn'
import Display from './Animals'
import Stack from '@mui/material/Stack';




const sizes = ['Small', 'Medium', 'Large']
const colors = ['Red', 'Blue', 'White', 'Black',]

//Getting the Data from the server

// const [sizes, setSizes] = React.useState([]);

// React.useEffect(() => {
//     fetch("/api/sizes")   // replace with API endpoint
//         .then(response => response.json())
//         .then(data => setSizes(data))
//         .catch(error => console.error("Error fetching sizes:", error));
// }, []);

// const [colors, setColors] = React.useState([]);

// React.useEffect(() => {
//     fetch("/api/colors")   // replace with API endpoint
//         .then(response => response.json())
//         .then(data => setSizes(data))
//         .catch(error => console.error("Error fetching colors:", error));
// }, []);


function ProductPage() {
    return (
        <div style={{ display: 'flex', padding: '1%', justifyContent: 'space-between' }}>
            {/* <h4>On the left</h4> */}
            <Display />
            <div style={{ flex: 1, padding:'2%'}}>
                <h1 style={{ fontSize: '2em' }}>Dog Clogs</h1>
                <div id='rightSideStuff'>
                    <div id='sizesContainer'>
                        <h2>Sizes</h2>
                        <Stack direction="row" spacing={2}>
                            {sizes.map((size) => (
                                <ColorButtons key={size} label={size} />
                            ))}
                        </Stack>
                    </div>
                    <div id='colorContainer'>
                        <h2>Colors</h2>
                        <Stack direction="row" spacing={2}>
                            {colors.map((color) => (
                                <SizeButtons key={color} label={color} />
                            ))}
                        </Stack>
                    </div>
                    <IconLabelButtons />
                </div>
            </div>
        </div>
    );
}


export default ProductPage