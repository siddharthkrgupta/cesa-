import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import EventCard from "../components/EventCard";

const EventsSection = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "events"));
        const fetchedEvents = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEvents(fetchedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section id="events" className="pt-[70px] h-auto w-full bg-blue-400 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white text-center">Our Events</h1>
      <div className="flex flex-wrap justify-center mt-10 pb-15">
        {events.map(evt => (
          <EventCard key={evt.id} event={evt} />
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
