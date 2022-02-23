import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <div className="contact-info">
        <div className="business-name">
          <p>Uptown Barbershop</p>
        </div>
        <div className="call-number">
          <p>Call: (214)238-6892</p>
        </div>
        <div className="text-number">
          <p>Text: (817)909-3112</p>
        </div>
      </div>
      <div className="service-prices">
        <div className="time-slot">
          <p>All services are based on time slots $40+</p>
        </div>
        <div className="new-clients">
          <p>New clients 1 hour - $40+</p>
        </div>
        <div className="existing-clients-half">
          <p>Existing client 30 min - $40+</p>
        </div>
        <div className="existing-client-full">
          <p>Existing Client 1hr - $40+</p>
        </div>
      </div>
      <div className="service-disclaimer">
        <p>
          If you are a new client please book new client for an hour so I can
          accomadate you correctly.{" "}
        </p>
        <p>
          In case you can't find the place, or run a little late, or want hair
          and beard done, or if your hair texture causes me to take a little
          more time on your hair.
        </p>
        <p>
          If you are an existing client, please book accordingly to the amount
          of time it takes to cut your hair.
        </p>
        <p>
          If you are unsure please contact me at (817)909-3112 and I will tell
          you what time slot to book.
        </p>
        <p>
          If you book too much time it's like taking an extra appointment away
          from me and you will be charged for it.
        </p>
        <p>
          If you don't book enough time you will make me run late and I will
          cancel your appointment.
        </p>
        <p>
          If you are more than 10 minutes late, you will be charged a
          cancellation fee and we can then reschedule afer payment has been
          received.
        </p>
      </div>
      <div className="book">
        <p>Please click on the calendar below to book your appointment</p>
      </div>
      <div className="link-container">
        <a href="https://square.site/book/BD56YRVYC21N5/jacob-rios-dallas-tx">
          <div className="image-container"></div>
        </a>
      </div>
    </div>
  );
};

export default Services;
