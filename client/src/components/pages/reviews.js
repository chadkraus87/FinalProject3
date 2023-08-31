import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { PiPawPrintFill, PiPawPrintLight } from 'react-icons/pi';
import { GET_ALL_REVIEWS } from '../../utils/queries';
import { CREATE_REPLY, UPDATE_REPLY, DELETE_REPLY } from '../../utils/mutations';



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

    const { loading, error, data } = useQuery(GET_ALL_REVIEWS);
    const [createReply] = useMutation(CREATE_REPLY);
    const [updateReply] = useMutation(UPDATE_REPLY);
    const [deleteReply] = useMutation(DELETE_REPLY);

    const reviews = data ? data.getAllReviews : [];

      const [replies, setReplies] = useState({});
      const [replyingTo, setReplyingTo] = useState(null);
      const [responseContent, setResponseContent] = useState({});
      const [editingReplyId, setEditingReplyId] = useState(null);
 
    
    const handleReply = (id) => {
        setReplyingTo(id);
      };

      const handleSendReply = async (id) => {
        try {
          const { data: newReplyData } = await createReply({
            variables: { reviewId: id, content: responseContent }
          });
         
        } catch (error) {
          console.error('Could not send reply:', error);
        }
      };
      
      const handleEditReply = async (id) => {
        try {
          const { data: updatedReplyData } = await updateReply({
            variables: { id, content: responseContent }
          });
        
        } catch (error) {
          console.error('Could not update reply:', error);
        }
      };
      
      const handleDeleteReply = async (id) => {
        try {
          await deleteReply({ variables: { id } });
         
        } catch (error) {
          console.error('Could not delete reply:', error);
        }
      };
      

    return (
        <div className="flex flex-col bg-body">
            <div className='bg-darkBlue p-6 m-6  flex flex-col shadow-lg'>
        <h2 className='text-xl text-offWhite text-center font-bold'>Reviews</h2>
        <div className='bg-offWhite p-4 mr-3 rounded '>
        <div className=' p-8 mx-12 my-4'>
        {reviews.sort((a, b) => new Date(b.date) - new Date(a.date)).map((review) => (
        <div key={review.id} className='bg-dark p-4 mb-4 rounded'>
        <div className="text-offWhite flex justify-between">
          <span>{review.name.name}</span>
          <span>Rating: {review.rating}</span>
          <span>Date: {review.date}</span>
        </div>
        <p className='text-offWhite'>Review: {review.text}</p>
        <div>
          {/* Call the renderRating function */}
          {renderRating(review.rating)} 
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
                      <button onClick={() => handleDeleteReply(review.id)} className='text-deepCoral'>Delete</button>
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

