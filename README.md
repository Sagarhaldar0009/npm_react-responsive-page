# React Responsive Page

A set of utility functions and components to make responsive design easier in React applications.

## Installation

```bash
npm install react-responsive-page



<h1>Usage</h1>



-[BreakpointProvider]

Wrap your application with BreakpointProvider to provide breakpoint context.

import React from 'react';
import { BreakpointProvider } from 'react-responsive-page';

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const App = () => (
  <BreakpointProvider breakpoints={breakpoints}>
    {/* Rest of your application */}
  </BreakpointProvider>
);




-[useBreakpoint] Hook

Use useBreakpoint to get the current breakpoint.

import React from 'react';
import { useBreakpoint } from 'react-responsive-page';

const MyComponent = () => {
  const breakpoint = useBreakpoint();
  
  return <div>Current Breakpoint: {breakpoint}</div>;
};





-[useResponsiveClasses] Hook

Use useResponsiveClasses to generate responsive classes.

import React from 'react';
import { useResponsiveClasses } from 'react-responsive-page';

const MyResponsiveComponent = () => {
  const classes = useResponsiveClasses({
    xs: 'text-small',
    md: 'text-medium',
    lg: 'text-large',
  });

  return <div className={classes}>Responsive Text</div>;
};