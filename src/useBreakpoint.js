import { useBreakpointContext } from './BreakpointProvider';

const useBreakpoint = () => {
  const { currentBreakpoint } = useBreakpointContext();
  return currentBreakpoint;
};

export default useBreakpoint;
