import React from 'react';
import './Loader.css'; 

const Loader = () => {
  return (
    <div className='Loader'>
     <img  className='.loader_img' href= "Front-end/public/imgs/giphy.webp" />
      <h2 className='loader_text'>Loading...</h2>
    </div>
  );
};

export default Loader;
