import React from "react";
import { useNavigate } from "react-router-dom";

export default function LahoreOptions() {
  const navigate = useNavigate();

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: 'url("/lahorebackground.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      ></div>

      {/* Top Navbar */}
      <div
        style={{
          width: "100%",
          height: "70px",
          position: "fixed",
          top: 0,
          left: 0,
          backdropFilter: "blur(10px)",
          background: "rgba(255,255,255,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          borderBottom: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "28px",
            fontWeight: 600,
            textShadow: "0 0 10px rgba(0,0,0,0.4)",
            margin: 0,
          }}
        >
          Cultural Vault
        </h1>
      </div>

      {/* Centered translucent box for options */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "100px",
          padding: "20px",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.18)",
            backdropFilter: "blur(12px)",
            padding: "30px",
            borderRadius: "18px",
            width: "360px",
            color: "white",
            boxShadow: "0 6px 28px rgba(0,0,0,0.35)",
            border: "1px solid rgba(255,255,255,0.28)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <h2 style={{ textAlign: "center", margin: "0 0 10px 0" }}>Explore Lahore</h2>

          {/* Sites Card */}
          <div
            style={{
              background: "rgba(255,255,255,0.12)",
              padding: "15px",
              borderRadius: "12px",
              cursor: "pointer",
              textAlign: "center",
            }}
            onClick={() => navigate("/lahore-sites")}
          >
            <h3>Sites</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "8px",
                marginTop: "10px",
              }}
            >
              <img
                src="/site1.jpg"
                alt="site1"
                style={{ width: "70px", height: "50px", borderRadius: "6px", objectFit: "cover" }}
              />
              <img
                src="/site2.jpg"
                alt="site2"
                style={{ width: "70px", height: "50px", borderRadius: "6px", objectFit: "cover" }}
              />
            </div>
            <p style={{ marginTop: "10px", fontSize: "14px" }}>
              Explore historical and cultural sites
            </p>
          </div>

          {/* Events Card */}
          <div
            style={{
              background: "rgba(255,255,255,0.12)",
              padding: "15px",
              borderRadius: "12px",
              cursor: "pointer",
              textAlign: "center",
            }}
            onClick={() => navigate("/lahore-events")}
          >
            <h3>Events</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "8px",
                marginTop: "10px",
              }}
            >
              <img
                src="/event1.jpg"
                alt="event1"
                style={{ width: "70px", height: "50px", borderRadius: "6px", objectFit: "cover" }}
              />
              <img
                src="/event2.jpg"
                alt="event2"
                style={{ width: "70px", height: "50px", borderRadius: "6px", objectFit: "cover" }}
              />
            </div>
            <p style={{ marginTop: "10px", fontSize: "14px" }}>
              Discover festivals and cultural events
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
