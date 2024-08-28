import React from 'react';
import './Loader.css'; // Ensure this file contains the necessary CSS

const Loader = () => {
  return (
    <div className='Loader'>
      {/* Embed the iframe */}
      <div style={{ width: '100%', height: '0', paddingBottom: '20%', position: 'relative',frameBorder:'none'}}>
        <iframe
          src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40"
          width="60%"
          height="70%"
          style={{ position: 'absolute', top: 0, left: 0, border: 'none' }}
          frameBorder="0"
          allowFullScreen
          title="Loading Animation"
        ></iframe>
      </div>
      <p>
        {/* <a href="https://giphy.com/gifs/mashable-3oEjI6SIIHBdRxXI40" target="_blank" rel="noopener noreferrer">via GIPHY</a> */}
      </p>
      <h2 className='loader_text'>Loading...</h2>
    </div>
  );
};

export default Loader;
