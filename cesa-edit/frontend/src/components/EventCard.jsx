import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ event }) => {
  console.log("🟡 Event Title:", event.Title);
console.log("📆 Raw event.date:", event.Date);

let eventDate;


if (event.Date?.toDate) {

  eventDate = event.Date.toDate();
} else {

  eventDate = new Date(event.Date);
}

eventDate.setHours(0, 0, 0, 0);

const today = new Date();
today.setHours(0, 0, 0, 0);

const isUpcoming = eventDate > today;


  const navigate = useNavigate();

  const registerHandler = () => {
    navigate(`/register/${event.id}`, {
      state: {
        eventTitle: event.Title,
        eventDate: event.Date,
      
      },
    });
  };

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg m-4 flex flex-col w-[20rem] ">
      <img src={event.Image} alt={event.Title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{event.Title}</h3>
        <p className="text-sm text-gray-600 mb-2">
          📅 {new Date(event.Date).toLocaleDateString('en-GB')}
        </p>
        <p className="text-gray-700 flex-1">{event.Description}</p>

        {isUpcoming ? (
  <button
    onClick={registerHandler}
    className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
  >
    Register
  </button>
) : (
   (
    <a
      href={event.Link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 w-full text-center bg-blue-600 border rounded-md h-[2.5em] flex  justify-center items-center text-white hover:underline"
    >
      Know More
    </a>
  )
)}


      </div>
    </div>
  );
};

export default EventCard;
