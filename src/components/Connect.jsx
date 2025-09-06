import React, { useState } from 'react';

const tutors = [
  {
    id: 1,
    name: 'John Doe',
    subject: 'Mathematics',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 2,
    name: 'Sarah Lee',
    subject: 'Physics',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: 3,
    name: 'Mohammed Ali',
    subject: 'Chemistry',
    avatar: 'https://i.pravatar.cc/150?img=8',
  },
  {
    id: 4,
    name: 'Emily Chen',
    subject: 'Biology',
    avatar: 'https://i.pravatar.cc/150?img=11',
  },
  {
    id: 5,
    name: 'David Smith',
    subject: 'English',
    avatar: 'https://i.pravatar.cc/150?img=15',
  },
];

export default Connect = () => {
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, { from: 'student', text: newMessage }]);
    setNewMessage('');

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          from: 'tutor',
          text: 'Thanks for your message. I will get back to you shortly.',
        },
      ]);
    }, 1000);
  };

  return (
    <div className='min-h-screen bg-gradient-to-tr from-indigo-100 via-purple-100 to-blue-100 p-6'>
      <h2 className='text-4xl font-bold text-center text-purple-800 mb-10 mt-10'>
        Connect with Tutors
      </h2>

      {!selectedTutor && (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
          {tutors.map((tutor) => (
            <div
              key={tutor.id}
              className='w-72 bg-white/80 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl p-5 hover:scale-105 transition-all duration-300 ease-in-out'
            >
              <div className='flex flex-col items-center'>
                <img
                  src={tutor.avatar}
                  alt='avatar'
                  className='w-24 h-24 rounded-full shadow-md mb-3 border-4 border-purple-200'
                />
                <h3 className='text-xl font-bold text-gray-800'>{tutor.name}</h3>
                <span className='text-sm text-purple-600 bg-purple-100 px-3 py-1 rounded-full mt-1 mb-4'>
                  {tutor.subject}
                </span>
                <button
                  onClick={() => {
                    setSelectedTutor(tutor);
                    setMessages([
                      {
                        from: 'tutor',
                        text: 'Hello! How can I help you today?',
                      },
                    ]);
                  }}
                  className='mt-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full transition shadow-md'
                >
                  Message
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Chat Section */}
      {selectedTutor && (
        <div className='max-w-2xl mx-auto mt-6 bg-white rounded-2xl shadow-2xl p-6'>
          <div className='flex justify-between items-center border-b pb-3 mb-4'>
            <div className='flex items-center gap-3'>
              <img
                src={selectedTutor.avatar}
                className='w-12 h-12 rounded-full border border-purple-200'
                alt=''
              />
              <div>
                <h4 className='font-semibold text-lg'>{selectedTutor.name}</h4>
                <p className='text-sm text-gray-500'>{selectedTutor.subject}</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedTutor(null)}
              className='text-sm text-purple-600 hover:underline'
            >
              ← Back to Tutors
            </button>
          </div>

          <div className='h-[50vh] overflow-y-auto bg-gray-50 p-4 rounded-lg mb-4 space-y-2'>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[70%] px-4 py-2 rounded-xl text-sm ${
                  msg.from === 'student'
                    ? 'bg-blue-500 text-white ml-auto text-right'
                    : 'bg-gray-200 text-gray-900'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className='flex items-center gap-2'>
            <input
              type='text'
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder='Type your message...'
              className='flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300'
            />
            <button
              onClick={handleSend}
              className='bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md'
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};