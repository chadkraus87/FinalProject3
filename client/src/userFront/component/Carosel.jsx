import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper,} from '@mui/material';
import AnimalModel from './Animals'; // Adjust the path accordingly


function Example(props) {
    var items = [
        // {
        //     name: "Photo 1",
        //     description: "Probably the most random thing you have ever seen!"
        // },
        {
            name: "3D Animal",
            description: "A stunning 3D animal model!"
        },
    ];

    const projectStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        margin: 'auto',
        zIndex: '4',
        pointerEvents: "none",
    };

    // const handleCarouselClick = (e) => {
    //     e.preventDefault();
    //     e.stopPropagation();
    // };

    return (
        <div style={projectStyle}>
            <Carousel
                autoPlay={false}
                fullHeightHover={false}
                indicators={false}
                navButtonsAlwaysVisible={true}
                animation="slide"
                
                navButtonsProps={{
                    style: {
                        backgroundColor: '#1A181B',
                        borderRadius: 2,
                        color: 'white',
                        margin: '0 30px',
                        boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
                        pointerEvents: "auto"
                    }
                }}
                navButtonsWrapperProps={{
                    style: {
                        bottom: '0',
                        top: 'unset',
                    }
                }}
                // onClick={handleCarouselClick} 
            >
                {
                    items.map((item, i) => {
                        if (item.name === "3D Animal") {
                            return <AnimalModel key={i} />
                        } else {
                            return <Item key={i} item={item} />
                        }
                    })
                }
            </Carousel>
        </div>
    )
}


function Item(props) {
    const paperStyle = {
        height: '70vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '3%',
        background: 'rgba(255, 255, 255, 0.45)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1vh solid rgba(255, 255, 255, 0.78)',
        '@media (maxWidth: 480px)': {
            width: '85vw',
            flexDirection: 'column',
            height: 'auto',
            padding: '20px',
        }
    };

    // const handleClick = (e) => {
    //     e.stopPropagation();
    // };

    return (
        <Paper style={paperStyle} >
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
        </Paper>
    )
}

export default Example;
