import React, { useEffect, useState } from 'react';
// import { useSubscription } from '@apollo/client';
// import { NEW_MESSAGE_SUBSCRIPTION } from '../../utils/queries';
import { BiMailSend } from 'react-icons/bi';

// Mock data that simulates what you would receive from the server
const mockMessages = [
    {
      user: "John Doe",
      subject: "Testing subject 1",
      content: "This is a sample message 1.",
      date: "08/24/2023"
    },
    {
      user: "Jane Smith",
      subject: "Testing subject 2",
      content: "This is a sample message 2.",
      date: "08/25/2023"
    },
    {
        user: "Eric Heltch",
        subject: "Testing subject 3",
        content: "This is a sample message 3.",
        date: "08/24/2023"
      }
    
  ];

function Messages() {

    // Using useState to set the mock data
    const [messages] = useState(mockMessages);

    // const [messages, setMessages] = useState([/* Initial messages */]);
    // const { data } = useSubscription(NEW_MESSAGE_SUBSCRIPTION); 
  
    // useEffect(() => {
    //   if (data) {
    //     setMessages((prevMessages) => [...prevMessages, data.messageCreated]); 
    //   }
    // }, [data]);

   

    const [showModal, setShowModal] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState(null);

  const handleViewMessage = (message) => {
    setSelectedMessage(message);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setReplyContent('');
  };

  const [isReplying, setIsReplying] = useState(false);
  const [replyContent, setReplyContent] = useState(''); 

  const handleReply = () => {
    setIsReplying(true);
  };

  const handleSendReply = () => {
    console.log('Sending reply:', replyContent); // Replace this once backend completes their code and testing completed!!!!!!
    setIsReplying(false); // Set to false so the inital state does not show the reply input until clicked
    setReplyContent(''); // Clear the reply content
    setShowModal(false);  // Close the modal
    
  };

    return (
        <div className="flex flex-col bg-paleBlue">
            <div className='bg-darkBlue p-6 m-6 rounded flex flex-col'>
                <h2 className='text-xl text-offWhite text-center font-bold'>Messages</h2>
                {/* Inner Message Container */}
                <div className='bg-offWhite p-4 mr-3 rounded '>
                    <table className="min-w-full  ">
                        <thead className='text-md text-smoke '>
                            <tr className='flex justify-between'>
                                <th>From</th>
                                <th>Subject</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        {/* Messages displayed */}
                        <tbody className="border-b border-dotted ">
  {messages.map((message, index) => (
    <tr key={index} className='flex justify-between'>
      <td >{message.user}</td>
      <td >{message.subject}</td>
      <td className="flex">{message.date} <button onClick={() => handleViewMessage(message)} className="ml-2 p-1 bg-yellow text-darkBlue text-xs rounded">View</button></td>
    </tr>
  ))}
</tbody>
                    </table>
                    <div >
                    </div>

                    {/* Message reply modal */}
                    {showModal && (
  <div className="fixed inset-0 flex items-center justify-center z-50 ">
    <div className='bg-lightOrange p-4 rounded'>
      <div className="bg-offWhite p-6 rounded-lg shadow-lg">
        <h3>{selectedMessage.user}</h3>
        <h4 className='text-sm'>{selectedMessage.subject}</h4>
        <p>{selectedMessage.content}</p>
        <div className="flex justify-between mt-4"> {/* Added this flex container */}
          {!isReplying && (
            <button onClick={handleReply} className="text-darkBlue text-xs">Reply</button>
          )}
          <button onClick={closeModal} className="text-darkBlue text-xs">Close</button>
        </div>
        {isReplying && (
          <div>
            <textarea value={replyContent} onChange={(e) => setReplyContent(e.target.value)} className="w-full p-2 rounded border mt-4" />
            <button onClick={handleSendReply} className="text-darkBlue mt-4 flex items-center">
              Send <BiMailSend size={25} className="ml-2 text-darkBlue"/> 
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
)}

                </div>
            </div>
        </div>
    )
}

export default Messages;