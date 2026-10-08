import React, { useState, useRef } from 'react';

export default function InteractiveVideo() {
  const videoRef = useRef(null);
  const [showCard, setShowCard] = useState(false);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const currentTime = videoRef.current.currentTime;
    
    // Pops up the interactive card when the video is between 10 and 15 seconds
    if (currentTime >= 10 && currentTime <= 15) {
      setShowCard(true);
    } else {
      setShowCard(false);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '800px', margin: '2rem auto' }}>
      <video
        ref={videoRef}
        controls
        width="100%"
        onTimeUpdate={handleTimeUpdate}
        style={{ borderRadius: '8px', display: 'block' }}
      >
        {/* Place your video file inside the static folder (e.g., static/img/...) or reference it via base route */}
        <source 
          src="/img/brainstorm_tutorial-run_brainstorming_session_en.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>

      {/* Floating Interactive Card Overlay */}
      {showCard && (
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'var(--ifm-card-background-color, #1b1b1d)',
          color: 'var(--ifm-font-color-base, #fff)',
          border: '1px solid var(--ifm-color-emphasis-200)',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
          zIndex: 10,
          maxWidth: '260px'
        }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '15px' }}>📌 Recommended Check</h4>
          <p style={{ fontSize: '13px', margin: '0 0 12px 0', opacity: 0.9 }}>
            Want to see how this works in practice? Check out our other tutorial video.
          </p>
          <a 
            href="/docs/videolibrary/other-video" 
            style={{ 
              fontSize: '13px', 
              fontWeight: 'bold', 
              color: 'var(--ifm-color-primary)', 
              textDecoration: 'none' 
            }}
          >
            Watch Related Video &rarr;
          </a>
        </div>
      )}
    </div>
  );
}