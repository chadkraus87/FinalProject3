import React, { useState } from 'react';
import { PiPawPrintFill, PiPawPrintLight } from 'react-icons/pi';

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

function Review({ review, onSendReply }) {
    const [replyingTo, setReplyingTo] = useState(false);
    const [responseContent, setResponseContent] = useState("");

    const handleReply = () => {
        setReplyingTo(true);
    };

    const handleSendReply = () => {
        onSendReply(review.id, responseContent);
        setResponseContent('');
        setReplyingTo(false);
    };

    return (
        <div className='bg-dark p-4 mb-4 rounded'>
            <div className="text-offWhite flex justify-between">
                <span>{review.user}</span>
                <span>Product: {review.product}</span>
                <span>Date: {review.date}</span>
            </div>
            <p className='text-offWhite'>Review: {review.content}</p>
            <div>
                {renderRating(review.rating)}
            </div>
            {/* Admin Reply to review */}
            {review.reply ? (
                <p className='text-offWhite'>Reply: {review.reply}</p>
            ) : (
                replyingTo ? (
                    <div>
                        <textarea value={responseContent} onChange={(e) => setResponseContent(e.target.value)} />
                        <button onClick={handleSendReply} className='text-deepCoral'>Send</button>
                    </div>
                ) : (
                    <button onClick={handleReply} className='text-deepCoral'>Reply</button>
                )
            )}
        </div>
    );
}

export default Review;
