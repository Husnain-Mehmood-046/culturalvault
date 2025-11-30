import React, { useState } from "react";
import "./LahoreFort.css";

export default function LahoreFort() {
  const images = ["/2.1.jpg", "/2.2.jpg", "/2.3.jpg", "/2.4.jpg"];

  const [rating] = useState(4.7);
  const [numRatings] = useState(198);
  const [numVisitors] = useState(540);

  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: 1,
  });
  const [bookingStatus, setBookingStatus] = useState("");

  const [reviewText, setReviewText] = useState("");
  const [userRating, setUserRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setBookingData((prev) => ({ ...prev, [name]: value }));
  }

  function handleBookingSubmit(e) {
    e.preventDefault();
    if (
      !bookingData.name ||
      !bookingData.email ||
      !bookingData.phone ||
      !bookingData.date
    ) {
      setBookingStatus("Please fill all required fields.");
      return;
    }

    setBookingStatus(
      `Thank you, ${bookingData.name}! Your tour for ${bookingData.date} has been booked. Our agent will contact you at ${bookingData.phone}.`
    );

    setBookingData({
      name: "",
      email: "",
      phone: "",
      date: "",
      guests: 1,
    });
  }

  function handleReviewSubmit(e) {
    e.preventDefault();
    if (!reviewText.trim() || userRating === 0) return;

    setReviews((prev) => [...prev, { text: reviewText, rating: userRating }]);
    setReviewText("");
    setUserRating(0);
  }

  return (
    <div className="fort-page">

      {/* VIDEO HEADER */}
      <div className="video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-bg"
          src="/lahorefort.mp4"
        />
        <div className="video-overlay">
          <h1>Lahore Fort</h1>
        </div>
      </div>

      <div className="content-wrapper">

        {/* IMAGES */}
        <div className="image-gallery">
          {images.map((img, idx) => (
            <img key={idx} src={img} alt="Lahore Fort" className="gallery-img" />
          ))}
        </div>

        {/* DESCRIPTION */}
        <section className="description-section">
          <h2>About Lahore Fort</h2>
          <p>
            The Lahore Fort, also known as Shahi Qila, is a UNESCO World Heritage
            Site and one of the most iconic structures of the Mughal Empire.
            Built and expanded by various Mughal emperors, it stands as a
            majestic symbol of art, culture, and architectural excellence.
          </p>
          <p>
            Featuring Sheesh Mahal, Alamgiri Gate, Naulakha Pavilion, and other
            royal complexes, the Fort showcases grandeur and historical richness.
          </p>
        </section>

        {/* STATS */}
        <section className="stats-section">
          <div className="stat-box">
            <h3>Rating</h3>
            <p>{rating} / 5 ★</p>
            <p>{numRatings} people rated</p>
          </div>
          <div className="stat-box">
            <h3>Visitors</h3>
            <p>{numVisitors} visitors booked tours</p>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="review-section">
          <h2>Reviews</h2>

          <form onSubmit={handleReviewSubmit} className="review-form">
            <label>
              Rating:
              <select
                value={userRating}
                onChange={(e) => setUserRating(Number(e.target.value))}
              >
                <option value={0}>Select Rating</option>
                <option value={1}>1 ★</option>
                <option value={2}>2 ★</option>
                <option value={3}>3 ★</option>
                <option value={4}>4 ★</option>
                <option value={5}>5 ★</option>
              </select>
            </label>

            <label>
              Review:
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
            </label>

            <button className="btn-book">Submit Review</button>
          </form>

          <div className="reviews-list">
            {reviews.map((r, idx) => (
              <div className="review-card" key={idx}>
                <p>{r.text}</p>
                <p>Rating: {r.rating} ★</p>
              </div>
            ))}
          </div>
        </section>

        {/* BOOKING */}
        <section className="booking-section">
          <h2>Book a Tour</h2>

          <form onSubmit={handleBookingSubmit} className="booking-form">
            <label>
              Name*
              <input name="name" value={bookingData.name} onChange={handleInputChange} />
            </label>

            <label>
              Email*
              <input name="email" value={bookingData.email} onChange={handleInputChange} />
            </label>

            <label>
              Phone*
              <input name="phone" value={bookingData.phone} onChange={handleInputChange} />
            </label>

            <label>
              Date*
              <input type="date" name="date" value={bookingData.date} onChange={handleInputChange} />
            </label>

            <label>
              Guests
              <input type="number" name="guests" value={bookingData.guests} onChange={handleInputChange} />
            </label>

            <button className="btn-book">Book Now</button>
          </form>

          {bookingStatus && <p className="booking-status">{bookingStatus}</p>}
        </section>

        {/* MAP */}
        <section className="map-section">
          <h2>Location</h2>
          <iframe
            title="Lahore Fort Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27218.69209343613!2d74.3181626!3d31.5880539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919037bb2a9c2dd%3A0x198e148d464472b3!2sLahore%20Fort%20%F0%9F%94%A5!5e0!3m2!1sen!2s!4v1706523456789"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </section>
      </div>
    </div>
  );
}
