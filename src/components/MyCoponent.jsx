import React from 'react';

function MyComponent() {
  const backgroundImage = "url('https://namratauniversal.com/img/about.jpg')";

  return (
    <div
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        height: '100vh', 
        margin:'40px',
      }}
    >
      
    </div>
  );
}

export default MyComponent;
