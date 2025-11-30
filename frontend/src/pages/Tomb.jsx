// src/pages/Tomb.jsx
import React, { useState } from "react";
import "./LahoreFort.css";

export default function Tomb() {
  const [rating, setRating] = useState(4.6);
  const [numRatings, setNumRatings] = useState(98);
  const [numVisitors, setNumVisitors] = useState(310);

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

  const images = ["/11.1.jpg", "/11.2.jpg", "/11.3.jpg"];

  function handleInputChange(e) {
    const { name, value } = e.target;
    setBookingData((prev) => ({ ...prev, [name]: value }));
  }

  function handleBookingSubmit(e) {
    e.preventDefault();
    if (
      !bookingData.name.trim() ||
      !bookingData.email.trim() ||
      !bookingData.phone.trim() ||
      !bookingData.date.trim()
    ) {
      setBookingStatus("Please fill all required fields.");
      return;
    }

    setBookingStatus(
      `Thank you, ${bookingData.name}! Your tour booking for ${bookingData.date} has been sent. Our agent will contact you at ${bookingData.phone}.`
    );

    setBookingData({ name: "", email: "", phone: "", date: "", guests: 1 });
  }

  function handleReviewSubmit(e) {
    e.preventDefault();
    if (!reviewText.trim() || userRating === 0) return;
    setReviews((prev) => [...prev, { text: reviewText, rating: userRating }]);
    setReviewText("");
    setUserRating(0);
  }

  return (
    <div className="site-page">
      {/* Video at top */}
      <div className="video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-bg"
          src="/tombvideo.mp4"
        />
        <div className="video-overlay">
          <h1>Jahangir Tomb</h1>
        </div>
      </div>

      <div className="content-wrapper">
        {/* Images */}
        <div className="image-gallery">
          {images.map((imgSrc, idx) => (
            <img
              key={idx}
              src={imgSrc}
              alt={`Jahangir Tomb ${idx + 1}`}
              className="gallery-img"
            />
          ))}
        </div>

        {/* Description */}
        <section className="description-section">
          <h2>About Jahangir Tomb</h2>
          <p>
            Jahangir Tomb, located in Shahdara Bagh, Lahore, is the final resting place
            of the Mughal Emperor Jahangir. This magnificent mausoleum showcases
            Mughal architecture with intricate marble work, lush gardens, and historical
            significance.
          </p>
          <p>
            Visitors can enjoy the serene atmosphere, explore the surrounding gardens,
            and learn about the rich Mughal heritage through this monumental tomb.
          </p>
        </section>

        {/* Stats */}
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

        {/* Reviews */}
        <section className="review-section">
          <h2>Reviews</h2>
          <form onSubmit={handleReviewSubmit} className="review-form">
            <label>
              Your Rating:
              <select
                value={userRating}
                onChange={(e) => setUserRating(Number(e.target.value))}
                required
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
                required
              />
            </label>
            <button type="submit" className="btn-book">Submit Review</button>
          </form>

          <div className="reviews-list">
            {reviews.map((rev, idx) => (
              <div key={idx} className="review-card">
                <p>{rev.text}</p>
                <p>Rating: {rev.rating} ★</p>
              </div>
            ))}
          </div>
        </section>

        {/* Booking */}
        <section className="booking-section">
          <h2>Book a Tour</h2>
          <form onSubmit={handleBookingSubmit} className="booking-form">
            <label>
              Name<span className="required">*</span>
              <input
                type="text"
                name="name"
                value={bookingData.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Email<span className="required">*</span>
              <input
                type="email"
                name="email"
                value={bookingData.email}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Phone<span className="required">*</span>
              <input
                type="tel"
                name="phone"
                value={bookingData.phone}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Date<span className="required">*</span>
              <input
                type="date"
                name="date"
                value={bookingData.date}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Guests
              <input
                type="number"
                name="guests"
                value={bookingData.guests}
                min="1"
                max="20"
                onChange={handleInputChange}
              />
            </label>
            <button type="submit" className="btn-book">Book Now</button>
          </form>
          {bookingStatus && <p className="booking-status">{bookingStatus}</p>}
        </section>

        {/* Map */}
        <section className="map-section">
          <h2>Location</h2>
          <iframe
            title="Jahangir Tomb Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.1!2d74.3!3d31.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919023aa:0x123456789!2sJahangir%20Tomb!5e0!3m2!1sen!2s!4v1700000000000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </div>
    </div>
  );
}
