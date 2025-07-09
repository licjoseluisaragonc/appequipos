import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home } from 'lucide-react'; 
import '../styles/Breadcrumbs.css';

const Breadcrumbs = () => {
  const location = useLocation();

  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav className="breadcrumb">
      <Link to="/" className="breadcrumb-link">
        <Home size={16} />
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = '/' + pathnames.slice(0, index + 1).join('/');
        const isLast = index === pathnames.length - 1;
        return (
          <span key={name}>
            <span className="separator">›</span>
            {isLast ? (
              <span className="breadcrumb-current">{decodeURIComponent(name)}</span>
            ) : (
              <Link to={routeTo} className="breadcrumb-link">{decodeURIComponent(name)}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
