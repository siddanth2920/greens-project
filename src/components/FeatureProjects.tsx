// import React from 'react';

// interface ProjectCardProps {
//   title: string;
//   category: string;
//   location: string;
//   year: string;
//   description: string;
//   imageUrl: string;
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({
//   title,
//   category,
//   location,
//   year,
//   description,
//   imageUrl,
// }) => {
//   return (
//     <div className="mx-4 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
//       <div className="relative h-64 overflow-hidden">
//         <img
//           src={imageUrl}
//           alt={title}
//           className="w-full h-full object-cover"
//         />
//         <div
//           className="absolute top-4 right-4 px-4 py-2 rounded text-white text-xs tracking-wider"
//           style={{ backgroundColor: '#5D4157' }}
//         >
//           {category}
//         </div>
//       </div>
//       <div className="p-6">
//         <h3
//           className="text-2xl font-light tracking-wide mb-2"
//           style={{ color: '#5D4157' }}
//         >
//           {title}
//         </h3>
//         <p className="text-sm mb-3" style={{ color: '#8B6F7F' }}>
//           📍 {location} • {year}
//         </p>
//         <p className="text-sm leading-relaxed" style={{ color: '#3D2C36' }}>
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
import React from 'react';

interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  location,
  year,
  description,
  imageUrl,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      style={{
        width: '100%',
        padding: '0 16px',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: isHovered ? '0 20px 40px rgba(93, 65, 87, 0.2)' : '0 10px 25px rgba(93, 65, 87, 0.1)',
          transition: 'all 0.3s ease',
          transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
          cursor: 'pointer',
          maxWidth: '900px',
          margin: '0 auto',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
          <img
            src={imageUrl}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              padding: '8px 16px',
              borderRadius: '4px',
              color: 'white',
              fontSize: '12px',
              letterSpacing: '0.1em',
              backgroundColor: '#5D4157',
              fontWeight: 500,
            }}
          >
            {category}
          </div>
        </div>
        <div style={{ padding: '24px' }}>
          <h3
            style={{
              fontSize: '24px',
              fontWeight: '300',
              letterSpacing: '0.05em',
              marginBottom: '8px',
              color: '#5D4157',
            }}
          >
            {title}
          </h3>
          <p style={{ 
            fontSize: '14px', 
            marginBottom: '12px', 
            color: '#8B6F7F' 
          }}>
            📍 {location} • {year}
          </p>
          <p style={{ 
            fontSize: '15px', 
            lineHeight: '1.6', 
            color: '#3D2C36' 
          }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;