import React from "react";
import { useNavigate } from "react-router-dom";
import "./LahoreSites.css";

const sites = [
  {
    name: "Badshahi Mosque",
    description:
      "One of the largest mosques in the world, with stunning Mughal architecture.",
    image: "/1.jpg",
  },
  {
    name: "Lahore Fort (Shahi Qila)",
    description:
      "This is probably the most charming and grand fort in entire Pakistan.",
    image: "/2.jpg",
  },
  {
    name: "Walled City of Lahore",
    description:
      "The historic walled city area of Lahore with rich cultural heritage.",
    image: "/3.jpg",
  },
  {
    name: "Wagah Border",
    description:
      "The ceremonial border crossing point between India and Pakistan.",
    image: "/4.jpg",
  },
  {
    name: "Minar-e-Pakistan",
    description: "A national monument symbolizing Pakistan’s independence.",
    image: "/5.jpg",
  },
  {
    name: "Shalimar Gardens",
    description: "Mughal-era gardens, showcasing Islamic architecture and beauty.",
    image: "/6.jpg",
  },
  {
    name: "Wazir Khan Mosque",
    description:
      "A stunning mosque famous for its intricate tile work and frescoes.",
    image: "/7.jpg",
  },
  {
    name: "Lahore Museum",
    description:
      "A museum with artifacts and exhibits showcasing the region’s history.",
    image: "/8.jpg",
  },
  {
    name: "Anarkali Bazaar",
    description: "One of the oldest surviving markets in South Asia.",
    image: "/9.jpg",
  },
  {
    name: "Food Street (Fort Road)",
    description: "A vibrant street famous for its delicious local cuisine.",
    image: "/10.jpg",
  },
  {
    name: "Tomb of Jahangir",
    description:
      "The mausoleum of Mughal Emperor Jahangir, with beautiful gardens.",
    image: "/11.jpg",
  },
  {
    name: "Bagh-e-Jinnah (Lawrence Garden)",
    description:
      "A massive and historical park in the heart of the city, offering a peaceful green space, a botanical garden, and a public library.",
    image: "/12.jpg",
  },
];

export default function LahoreSites() {
  const navigate = useNavigate();

  function handleSiteClick(siteName) {
    // Navigate to specific site page based on site name
    switch (siteName) {
      case "Badshahi Mosque":
        navigate("/badshahi-mosque");
        break;
      case "Lahore Fort (Shahi Qila)":
        navigate("/lahore-fort");
        break;
      case "Walled City of Lahore":
        navigate("/walled-city");
        break;
      case "Wagah Border":
        navigate("/wagah-border");
        break;
      case "Minar-e-Pakistan":
        navigate("/minar-e-pakistan");
        break;
      case "Shalimar Gardens":
        navigate("/shalimar-gardens");
        break;
      case "Wazir Khan Mosque":
        navigate("/wazir-khan-mosque");
        break;
      case "Lahore Museum":
        navigate("/lahore-museum");
        break;
      case "Anarkali Bazaar":
        navigate("/anarkali-bazaar");
        break;
      case "Food Street (Fort Road)":
        navigate("/food-street");
        break;
      case "Tomb of Jahangir":
        navigate("/tomb-jahangir");
        break;
      case "Bagh-e-Jinnah (Lawrence Garden)":
        navigate("/bagh-e-jinnah");
        break;
      default:
        console.log("No page found for this site");
    }
  }

  return (
    <div className="lahore-timeline-page">
      <div className="top-bar">
        <h1>Cultural Vault</h1>
      </div>

      <h2 className="page-title">Explore Lahore's Sites</h2>

      <div className="timeline-container">
        {sites.map((site, idx) => (
          <div
            key={idx}
            className="timeline-item"
            style={{ cursor: "pointer" }}
            onClick={() => handleSiteClick(site.name)}
          >
            <div className="content-left">
              <img src={site.image} alt={site.name} />
            </div>
            <div className="content-center">
              <div className="circle"></div>
              {idx !== sites.length - 1 && <div className="line"></div>}
            </div>
            <div className="content-right">
              <h3>{site.name}</h3>
              <p>{site.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
