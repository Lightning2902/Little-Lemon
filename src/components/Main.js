// try 1

import React, { useState } from "react";
import dishImage from "../images/restauranfood.jpg";
import deliveryIcon from "../images/Dish icon.jpg";
import reviewerImage from "../images/Mario and Adrian A.jpg";
import image1 from "../images/lemon dessert.jpg";
import image2 from "../images/greek salad.jpg";
import { Link } from "react-router-dom"; // Import Link for navigation

function Main() {
  const [showImage1, setShowImage1] = useState(true);

  const toggleImage = () => {
    setShowImage1(!showImage1);
  };

  const scrollLeft = () => {
    document
      .querySelector(".testimonial-cards")
      .scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    document
      .querySelector(".testimonial-cards")
      .scrollBy({ left: 300, behavior: "smooth" });
  };
  return (
    <main className="main-content">
      {/* First section (Little Lemon) */}
      <section className="first-section">
        <div className="text-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Welcome to Little Lemon, your gateway to the heart of Chicago's
            culinary scene. Step into our cozy dining room, where the aroma of
            freshly prepared dishes fills the air. Our menu is a delightful
            showcase of the city's diverse flavors, from classic deep-dish
            pizzas to hearty Italian-inspired entrees. Each dish is crafted with
            the finest ingredients and a touch of Midwestern hospitality.
            Whether you're a seasoned Chicagoan or a first-time visitor, Little
            Lemon offers a memorable dining experience that will leave you
            craving more.
          </p>
          {/* <button className="reservation-btn">Make a Reservation</button> */}
          <Link to="/booking-page" className="reservation-link">
            Make a Reservation
          </Link>
        </div>
        <div className="image-content">
          <img src={dishImage} alt="Delicious Dish" />
        </div>
      </section>

      {/* Second section (Specials) */}
      <section className="second-section">
        <div className="section-header">
          <h2>Specials</h2>
          <button className="menu-btn">Online Menu</button>
        </div>

        <div className="card-container">
          {/* Card 1 */}
          <div className="card">
            <img src={dishImage} alt="Dish 1" />
            <h3>
              Greek Salad <span>$12.99</span>
            </h3>
            <p>
              also known as horiatiki (meaning "village salad"), is a simple yet
              incredibly flavorful dish that epitomizes the freshness and
              vibrancy of Mediterranean cuisine. It's a delightful combination
              of crisp vegetables, tangy feta cheese, and a zesty dressing.
            </p>
            <a href="/order" className="delivery-link">
              Order for Delivery
              <img src={deliveryIcon} alt="delivery Icon" />
            </a>
          </div>

          {/* Card 2 */}

          <div className="card">
            <img src={dishImage} alt="Dish2" />
            <h3>
              Bruchetta <span>$14.99</span>
            </h3>
            <p>
              is a classic Italian appetizer made with toasted bread topped with
              various ingredients. It's a versatile dish that can be customized
              to your taste. Common toppings include olive oil, garlic,
              tomatoes, basil, and balsamic vinegar.
            </p>
            <a href="/order" className="delivery-link">
              Order for delivery
              <img src={deliveryIcon} alt="Delivery Icon" />
            </a>
          </div>

          {/* Card 3 */}
          <div className="card">
            <img src={dishImage} alt="Dish 3" />
            <h3>
              Lemon Dessert <span>$10.99</span>
            </h3>
            <p>
              is a delightful dessert featuring a buttery, flaky crust filled
              with a tangy lemon curd. The sweet and tart flavors are perfectly
              balanced, making it a refreshing treat. Serve with a dollop of
              whipped cream for an extra touch of indulgence.
            </p>
            <a href="/order" className="delivery-link">
              Order for Delivery
              <img src={deliveryIcon} alt="Delivery Icon" />
            </a>
          </div>
        </div>
      </section>

      {/* Third section (Testimonial) */}
      <section className="third-section">
        <h2>Testimonial</h2>
        <div className="scroll-buttons">
          <button className="scroll-btn left" onClick={scrollLeft}>
            ←
          </button>
          <button className="scroll-btn right" onClick={scrollRight}>
            →
          </button>
        </div>

        <div className="testimonial-cards">
          {/* Card 1 */}
          <div className="testimonial-card">
            <div className="rating">
              <span>Rating:</span> <span>4.5</span>
            </div>
            <div className="reviewer-info">
              <img
                src={reviewerImage}
                alt="Reviewer 1"
                className="reviewer-img"
              />
              <div className="reviewer-details">
                <h3>Jane Doe</h3>
                <a href="/review" className="review-link">
                  Review Next
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="testimonial-card">
            <div className="rating">
              <span>Rating:</span> <span>5.0</span>
            </div>
            <div className="reviewer-info">
              <img
                src={reviewerImage}
                alt="Reviewer 2"
                className="reviewer-img"
              />
              <div className="reviewer-details">
                <h3>John Smith</h3>
                <a href="/review" className="review-link">
                  Review Next
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="testimonial-card">
            <div className="rating">
              <span>Rating:</span> <span>4.8</span>
            </div>
            <div className="reviewer-info">
              <img
                src={reviewerImage}
                alt="Reviewer 3"
                className="reviewer-img"
              />
              <div className="reviewer-details">
                <h3>Emily Johnson</h3>
                <a href="/review" className="review-link">
                  Review Next
                </a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="testimonial-card">
            <div className="rating">
              <span>Rating:</span> <span>4.2</span>
            </div>
            <div className="reviewer-info">
              <img
                src={reviewerImage}
                alt="Reviewer 4"
                className="reviewer-img"
              />
              <div className="reviewer-details">
                <h3>Michael Brown</h3>
                <a href="/review" className="review-link">
                  Review Next
                </a>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="testimonial-card">
            <div className="rating">
              <span>Rating:</span> <span>4.2</span>
            </div>
            <div className="reviewer-info">
              <img
                src={reviewerImage}
                alt="Reviewer 4"
                className="reviewer-img"
              />
              <div className="reviewer-details">
                <h3>Michael Brown</h3>
                <a href="/review" className="review-link">
                  Review Next
                </a>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="testimonial-card">
            <div className="rating">
              <span>Rating:</span> <span>4.2</span>
            </div>
            <div className="reviewer-info">
              <img
                src={reviewerImage}
                alt="Reviewer 4"
                className="reviewer-img"
              />
              <div className="reviewer-details">
                <h3>Michael Brown</h3>
                <a href="/review" className="review-link">
                  Review Next
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth section (Image Toggle) */}
      <section className="fourth-section">
        <div className="text-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Discover the essence of Little Lemon, where our commitment to
            quality and passion for flavor come together. Experience a
            delightful range of dishes that represent the heart of Chicago's
            culinary scene.
          </p>
        </div>

        <div className="image-toggle">
          <img
            src={showImage1 ? image1 : image2}
            alt="Dish"
            className="toggle-image"
          />
          <button className="toggle-btn" onClick={toggleImage}>
            {showImage1 ? "Show Image 2" : "Show Image 1"}
          </button>
        </div>
      </section>
    </main>
  );
}

export default Main;

