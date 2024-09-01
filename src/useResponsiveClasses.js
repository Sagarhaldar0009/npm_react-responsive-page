import { useBreakpointContext } from './BreakpointProvider';

const useResponsiveClasses = (classes) => {
  const { currentBreakpoint, breakpoints } = useBreakpointContext();

  const responsiveClasses = Object.entries(classes).reduce((acc, [key, value]) => {
    if (breakpoints[key] <= breakpoints[currentBreakpoint]) {
      return `${acc} ${value}`;
    }
    return acc;
  }, '');

  return responsiveClasses.trim();
};

export default useResponsiveClasses;
