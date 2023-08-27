import React from 'react';

function Reviews({ productName, reviews }) {

    return (
        <div>
            <h2>Reviews for {productName}</h2>
            {reviews.length === 0 ? (
                <p>No reviews yet.</p>
            ) : (
                <ul>
                    {reviews.map((review, index) => (
                        <li key={index}>
                            <p><strong>User:</strong> {review.username}</p>
                            <p><strong>Rating:</strong> {review.rating}</p>
                            <p><strong>Review:</strong> {review.text}</p>
                            <p><small><strong>Date:</strong> {review.date}</small></p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Reviews;
