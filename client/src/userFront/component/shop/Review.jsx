import React from 'react';



function formatDate(timestamp) {
    console.log("Timestamp:", timestamp);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(Number(timestamp)).toLocaleDateString(undefined, options); 
}


function Reviews({ productName, reviews = [] })  {

    

    const reviewContainerStyle = {
        backgroundColor: '#f9f9f9',
        borderRadius: '5px',
        padding: '15px',
        margin: '15px 0',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)'
    };

    const reviewItemStyle = {
        backgroundColor: '#fff',
        padding: '10px',
        borderRadius: '5px',
        margin: '10px 0',
        boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.1)'
    };

    const reviewTitleStyle = {
        fontSize: '20px',
        borderBottom: '1px solid #eaeaea',
        paddingBottom: '10px',
        marginBottom: '10px'
    };

    const boldText = {
        fontWeight: 'bold'
    };

    const dateStyle = {
        color: '#888',
        fontSize: '12px'
    };

    return (
        <div style={reviewContainerStyle}>
            <h2 style={reviewTitleStyle}>Reviews for {productName}</h2>
            {reviews.length === 0 ? (
                <p>No reviews yet.</p>
            ) : (
                <ul style={{ listStyleType: 'none', padding: '0' }}>
                    {reviews.map((review, index) => (
                        <li key={index} style={reviewItemStyle}>
                            <p style={boldText}><strong>User:</strong> {review.username}</p>
                            <p style={boldText}><strong>Rating:</strong> {review.rating}</p>
                            <p style={boldText}><strong>Review:</strong> {review.text}</p>
                            <p style={dateStyle}><strong>Date:</strong> {formatDate(review.date)}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Reviews;
