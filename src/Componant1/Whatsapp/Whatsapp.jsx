import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi'; // <-- Import FiMapPin

const Whatsapp = () => {
  const pulseStyle = {
    position: 'fixed',
    cursor: 'pointer',
    display: 'block',
    width: '60px',
    height: '60px',
    bottom: '100px',
    right: '20px',
    backgroundColor: '#849826',
    color: 'white',
    borderRadius: '50px',
    textAlign: 'center',
    transitionDuration: '0.5s',
    animation: 'pulse-btn 3s infinite',
    zIndex: 9000,
  };

  const iconStyle = {
    position: 'relative',
    zIndex: 20,
    top: '16px',
    fontSize: '30px',
  };

  const keyframes = `
    @keyframes pulse-btn {
      0% {
        box-shadow: 0 0 0 0 #849826;
      }
      70% {
        box-shadow: 0 0 0 20px rgba(0, 200, 0, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(0, 200, 0, 0);
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={pulseStyle}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#849826')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#849826')}
      >
        <a
          href="https://wa.me/+966549272708"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px' }}
        >
          <i style={iconStyle} className="fa fa-whatsapp" />
          <BsWhatsapp style={{ ...iconStyle, top: '13px' }} />
        </a>
      </div>
    </>
  );
};

export default Whatsapp;
