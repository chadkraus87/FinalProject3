import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

const mockReviews = [
    {
      id: 1,
      user: "John Doe",
      product: "Dog Clogs",
      date: "08/24/2023",
      content: "I love this product! It's amazing.",
      rating: 5,
    },
    {
      id: 2,
      user: "Jane Smith",
      product: "Kitten Mittens",
      date: "08/22/2023",
      content: "This product is good, but I wish it had more color options.",
      rating: 4,
    },
    {
        id: 3,
        user: "Billy Thorton",
        product: "Dog Socks",
        date: "08/24/2023",
        content: "I get a kick out of watching my dog walk with socks on.",
        rating: 5,
      },
      {
        id: 4,
        user: "Sandra Bullock",
        product: "Cat Hat",
        date: "08/22/2023",
        content: "I love it but my cat hates it! At least I got one picture before he destroyed it.",
        rating: 4,
      },
   
  ];
function LatestReviews() {
  const [reviews, setReviews] = useState(mockReviews);

  useEffect(() => {
    // Fetch the latest 5 reviews from your database
    axios.get('/api/reviews?limit=5') // Replace with your actual API endpoint
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the latest reviews:', error);
      });
  }, []);

  return (
    <div className="bg-offWhite p-4 rounded">
      <h2 className="text-xl font-bold mb-4 text-center border-b border-dotted">Latest Reviews</h2>
      <div className="">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-3 m-2 rounded shadow-md" >
            <p className="text-sm">{review.user}: {review.content} {review.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestReviews;
