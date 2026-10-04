import React, { useState } from 'react';
import Footer from '@theme-original/DocItem/Footer';

export default function FooterWrapper(props) {
  const [feedback, setFeedback] = useState(null);

  return (
    <>
      <Footer {...props} />
      
      <div style={{
        marginTop: '2rem', 
        padding: '1.5rem', 
        borderTop: '1px solid var(--ifm-color-emphasis-200)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <span>Was this page helpful?</span>
        {feedback ? (
          <span style={{color: 'var(--ifm-color-success)'}}>Thanks for your feedback!</span>
        ) : (
          <div style={{display: 'flex', gap: '0.5rem'}}>
            <button 
              onClick={() => setFeedback('yes')}
              className="button button--secondary button--sm">
              👍 Yes
            </button>
            <button 
              onClick={() => setFeedback('no')}
              className="button button--secondary button--sm">
              👎 No
            </button>
          </div>
        )}
      </div>
    </>
  );
}