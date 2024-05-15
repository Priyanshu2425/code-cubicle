import React, { useState } from 'react';

const HostEvent = () => {
    const [eventName, setEventName] = useState('');

    const addEvent = async () => {
        const authToken = localStorage.getItem('auth_token');
        const url = 'http://localhost:3000/user/add-event';
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth': authToken
                },
                body: JSON.stringify({ eventName })
            });

            if (response.ok) {
                console.log('Event added successfully');
                // You can add further actions upon successful event addition
            } else {
                console.error('Failed to add event');
                // Handle error case here
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error case here
        }
    };

    return (
        <div className="flex flex-col items-center h-full">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
                <label htmlFor="eventName" className="block text-gray-700 text-sm font-bold mb-2">Enter Event Name</label>
                <input
                    type="text"
                    id="eventName"
                    placeholder="Enter Event Name"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <button
                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={addEvent}
                >
                    Add Event
                </button>
            </div>
        </div>
    );
};

export default HostEvent;
