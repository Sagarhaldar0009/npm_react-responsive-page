import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const BreakpointContext = createContext();

const BreakpointProvider = ({ breakpoints, children }) => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState('');

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      const breakpoint = Object.keys(breakpoints).find(
        (key) => width >= breakpoints[key]
      );
      setCurrentBreakpoint(breakpoint || '');
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, [breakpoints]);

  return (
    <BreakpointContext.Provider value={{ currentBreakpoint, breakpoints }}>
      {children}
    </BreakpointContext.Provider>
  );
};

BreakpointProvider.propTypes = {
  breakpoints: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export const useBreakpointContext = () => useContext(BreakpointContext);

export default BreakpointProvider;
