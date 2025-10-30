import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  project?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  project,
}) => {
  return (
    <div style={{ width: '100%', padding: '0 16px' }}>
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '48px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative',
          minHeight: '250px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '16px',
            left: '24px',
            fontSize: '60px',
            opacity: 0.1,
            color: '#5D4157',
            fontFamily: 'Georgia, serif',
          }}
        >
          "
        </div>
        <p
          style={{
            fontSize: '18px',
            fontStyle: 'italic',
            lineHeight: '1.8',
            marginBottom: '24px',
            position: 'relative',
            zIndex: 1,
            color: '#3D2C36',
          }}
        >
          {quote}
        </p>
        <div
          style={{
            borderTop: '2px solid #E8DDD5',
            paddingTop: '16px',
          }}
        >
          <p
            style={{
              fontWeight: 500,
              fontSize: '18px',
              marginBottom: '4px',
              color: '#5D4157',
            }}
          >
            {author}
          </p>
          {project && (
            <p style={{ fontSize: '14px', color: '#8B6F7F' }}>
              {project}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;