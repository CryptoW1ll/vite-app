import React from 'react';

const CCAttribution = () => {
  const style = {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: '#fff',
    textAlign: 'right',
    padding: '1.5rem',
    fontSize: '0.9rem',
    zIndex: 1000,
  };

  return (
    <div style={style}>
      Imagery courtesy of <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer" style={{ color: '#aad' }}>NASA</a> & used under <a href="https://www.nasa.gov/multimedia/guidelines/index.html" target="_blank" rel="noopener noreferrer" style={{ color: '#aad' }}>CC Attribution 4.0</a>.
    </div>
  );
};

export default CCAttribution;
