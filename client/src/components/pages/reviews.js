import React, { useState } from 'react';
import { PiPawPrintFill, PiPawPrintLight } from 'react-icons/pi';


// Mock Review data
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
        content: "I love watching my dog walk in socks.",
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

  const renderRating = (rating) => (
    <div>
      {Array.from({ length: rating }).map((_, index) => (
        <PiPawPrintFill key={index} className='inline-flex text-yellow' />
      ))}
      {Array.from({ length: 5 - rating }).map((_, index) => (
        <PiPawPrintLight key={index} className='inline-flex text-yellow'/>
      ))}
    </div>
  );

  function AdminReviews () {

    const [reviews, setReviews] = useState(
        mockReviews
      );
      const [replies, setReplies] = useState({});
      const [replyingTo, setReplyingTo] = useState(null);
      const [responseContent, setResponseContent] = useState({});
      const [editingReplyId, setEditingReplyId] = useState(null);
 
    
    const handleReply = (id) => {
        setReplyingTo(id);
      };

      const handleEditReply = (id) => {
        setEditingReplyId(id);
        setResponseContent(replies[id]);
      };
      
    
      const handleSendReply = (id) => {
        setReplies({ ...replies, [id]: responseContent });
        setResponseContent('');
        setReplyingTo(null);
      };

    return (
        <div className="flex flex-col bg-paleBlue">
            <div className='bg-darkBlue p-6 m-6  flex flex-col'>
        <h2 className='text-xl text-offWhite text-center font-bold'>Reviews</h2>
        <div className='bg-offWhite p-4 mr-3 rounded '>
        <div className=' p-8 mx-12 my-4'>
        {mockReviews.sort((a, b) => new Date(b.date) - new Date(a.date)).map((review) => (
        <div key={review.id} className='bg-dark p-4 mb-4 rounded'>
        <div className="text-offWhite flex justify-between">
          <span>{review.user}</span>
          <span>Product: {review.product}</span>
          <span>Date: {review.date}</span>
        </div>
        <p className='text-offWhite'>Review: {review.content}</p>
        <div>
          {renderRating(review.rating)} {/* Call the renderRating function */}
        </div>

 {/* Conditional rendering for replies and editing */}
 {replies[review.id] ? (
                  editingReplyId === review.id ? (
                    <div>
                      <textarea
                        value={responseContent}
                        onChange={(e) => setResponseContent(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            handleSendReply(review.id);
                            setEditingReplyId(null);
                          }
                        }}
                      />
                      <button onClick={() => { handleSendReply(review.id); setEditingReplyId(null); }} className='text-deepCoral'>Update</button>
                    </div>
                  ) : (
                    <>
                      <p className='text-offWhite'>Reply: {replies[review.id]}</p>
                      <button onClick={() => handleEditReply(review.id)} className='text-deepCoral'>Edit</button>
                    </>
                  )
                ) : (
                  replyingTo === review.id ? (
                    <div>
                      <textarea value={responseContent} 
                        onChange={(e) => setResponseContent(e.target.value)} 
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            handleSendReply(review.id);
                          }
                        }}
                      />
                      <button onClick={() => handleSendReply(review.id)} className='text-deepCoral'>Send</button>
                    </div>
                  ) : (
                    <button onClick={() => handleReply(review.id)} className='text-deepCoral'>Reply</button>
                  )
                )}
              </div>
            ))}
    </div>

        </div>
        </div>
      </div>
    );
  }

  export default AdminReviews;

