import React from 'react';
import dessinLogo from '../assets/dessinlogo.png';

const Loading: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#F5F0ED',
      }}
    >
      <div
        style={{
          animation: 'spin 2s linear infinite',
        }}
      >
        <img
          src={dessinLogo}
          alt="Loading..."
          style={{
            width: '120px',
            height: '120px',
            objectFit: 'contain',
          }}
        />
      </div>
      <p
        style={{
          marginTop: '24px',
          fontSize: '16px',
          fontWeight: '300',
          letterSpacing: '0.1em',
          color: '#5D4157',
        }}
      >
        Loading...
      </p>
      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;