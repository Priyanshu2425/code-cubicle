import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { images } from '../assets/data';
import HostEvent from './HostEvent'; // Assuming HostEvent component is in the same directory
import EventCardHost from '../components/EventCardHost';

const MyEvents = () => {
  const [events, setEvents] = useState([]);

  const fetchMyEvents = async () => {
    try {
      const authToken = localStorage.getItem('auth_token');
      const response = await fetch('http://localhost:3000/user/get-events', {
        method: 'GET',
        headers: {
          'auth': authToken
        }
      });

      if (response.ok) {
        const eventData = await response.json();
        console.log(eventData)
        setEvents(eventData.events); // Assuming the response structure is { events: [...] }
      } else {
        console.error('Failed to fetch events');
        // Handle error case here
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error case here
    }
  };

  useEffect(() => {
    fetchMyEvents();
  }, [events]);

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 h-max items-start">
      <HostEvent onAddEvent={addEvent} /> 

      {events.map(event => (
        <EventCardHost
          key={event._id}
          imageUrl={images[0]}
          title={event.eventName}
          // description={event.description}
          // venue={event.venue}
          id={event._id}
        />
      ))}
    </div>
  );
};

export default MyEvents;
