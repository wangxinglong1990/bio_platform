import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  name: string;
  path: string;
  icon?: React.ReactNode;
  color?: string;
}

interface CustomBreadcrumbProps {
  items: BreadcrumbItem[];
}

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
  </svg>
);

// 特定路径到颜色的映射
const pathColorMap: Record<string, string> = {
  '/features/kcat': '#5B86E5',
  '/features/km': '#FF5F6D',
  '/features/tm': '#11998e',
  '/features/solubility': '#4E65FF',
  '/predict/kcat': '#5B86E5',
  '/predict/km': '#FF5F6D',
  '/predict/tm': '#11998e',
  '/predict/solubility': '#4E65FF',
  '/training/kcat': '#5B86E5',
  '/training/km': '#FF5F6D',
  '/training/tm': '#11998e',
  '/training/solubility': '#4E65FF',
};

const CustomBreadcrumb: React.FC<CustomBreadcrumbProps> = ({ items }) => {
  const location = useLocation();
  const currentPathColor = pathColorMap[location.pathname] || '#6c757d';

  return (
    <div className="d-flex align-items-center mb-4 pt-2">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const itemColor = item.color || (isLast ? currentPathColor : '#666');
        
        return (
          <React.Fragment key={item.path}>
            {index === 0 ? (
              <Link 
                to={item.path} 
                className="text-decoration-none d-flex align-items-center"
                style={{ transition: 'transform 0.2s ease' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div 
                  className="d-flex align-items-center justify-content-center me-2"
                  style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '8px',
                    background: `linear-gradient(135deg, ${currentPathColor}22, ${currentPathColor}44)`,
                    color: currentPathColor,
                    transition: 'all 0.2s ease',
                    boxShadow: `0 2px 8px ${currentPathColor}22`
                  }}
                >
                  {item.icon || <HomeIcon />}
                </div>
                <span 
                  style={{ fontSize: '14px', fontWeight: '500', color: itemColor }}
                  dangerouslySetInnerHTML={{ __html: item.name }}
                ></span>
              </Link>
            ) : isLast ? (
              <span 
                style={{ 
                  fontSize: '14px', 
                  fontWeight: '600',
                  color: itemColor,
                  padding: '4px 12px',
                  borderRadius: '16px',
                  background: `${currentPathColor}11`
                }}
                dangerouslySetInnerHTML={{ __html: item.name }}
              ></span>
            ) : (
              <Link 
                to={item.path} 
                className="text-decoration-none"
                style={{ 
                  fontSize: '14px', 
                  fontWeight: '500', 
                  color: itemColor,
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = currentPathColor;
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = itemColor;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span dangerouslySetInnerHTML={{ __html: item.name }}></span>
              </Link>
            )}
            
            {!isLast && (
              <span className="mx-2" style={{ color: '#ccc' }}>
                <ChevronRight />
              </span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CustomBreadcrumb; 