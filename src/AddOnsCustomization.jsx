import React from 'react';


const CustomizationSection = () => {
  const features = [
    "Company logo at your door",
    "Private internet line",
    "Access control for your team",
    "Dedicated meeting room (on request)",
    "Layout customisation for seating and storage",
    "Add-ons like whiteboards, screens, and shelving"
  ];

  return (
    <div style={{
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      padding: '5rem 2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '141px',
        height: '128px',
        background: 'rgba(225, 82, 82, 0.05)',
        borderRadius: '50%',
        zIndex: 1
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        left: '-100px',
        width: '170px',
        height: '180px',
        background: 'rgba(225, 82, 82, 0.03)',
        borderRadius: '50%',
        zIndex: 1
      }}></div>

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1rem'
        }}>
          <h2 style={{
            fontSize: '2.8rem',
            color: '#000',
            fontWeight: 'bold',
            margin: '0'
          }}>
            Customization
          </h2>
        </div>
        
        <div style={{
          width: '80px',
          height: '4px',
          backgroundColor: '#e15252',
          margin: '0 auto 1rem auto',
          borderRadius: '2px'
        }}></div>
        
        <p style={{
          color: '#555',
          fontSize: '1.2rem',
          marginBottom: '4rem',
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto 4rem auto',
          lineHeight: '1.6'
        }}>
          Make the space your own, without any of the hassle
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
              border: '1px solid rgba(225, 82, 82, 0.1)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(225, 82, 82, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)';
            }}
            >
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '4px',
                background: 'linear-gradient(90deg, #e15252, #ff6b6b)',
              }}></div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center'
              }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  backgroundColor: '#e15252',
                  borderRadius: '50%',
                  marginRight: '1rem',
                  flexShrink: 0,
                  animation: 'pulse 2s infinite'
                }}></div>
                
                <span style={{
                  color: '#333',
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  lineHeight: '1.5'
                }}>
                  {feature}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default CustomizationSection;