import React from 'react';
import { Container } from 'react-bootstrap';
import CustomBreadcrumb from './CustomBreadcrumb';

interface BreadcrumbItem {
  name: string;
  path: string;
  icon?: React.ReactNode;
  color?: string;
}

interface PredictorLayoutProps {
  title: string;
  breadcrumbItems: BreadcrumbItem[];
  color: string;
  children: React.ReactNode;
}

const PredictorLayout: React.FC<PredictorLayoutProps> = ({
  title,
  breadcrumbItems,
  color,
  children
}) => {
  return (
    <Container className="py-4">
      {/* 面包屑导航 */}
      <CustomBreadcrumb items={breadcrumbItems} />
      
      {/* 标题区域 */}
      <div className="position-relative">
        <h1 className="fw-bold mb-4 d-inline-block position-relative" 
            dangerouslySetInnerHTML={{ __html: title }}>
        </h1>
        <div 
          className="position-absolute" 
          style={{ 
            height: '4px', 
            width: '40%', 
            background: `linear-gradient(90deg, ${color}, transparent)`,
            bottom: '-8px',
            left: '0',
            borderRadius: '2px'
          }}
        ></div>
      </div>
      
      {/* 内容区域 */}
      {children}
    </Container>
  );
};

export default PredictorLayout; 