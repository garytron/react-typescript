import { useEffect, useRef, useState } from 'react';

interface TimeArgs {
  milliseconds: number
};

export const Timer = ( { milliseconds } : TimeArgs ) => {
  const [seconds, setSeconds] = useState(0);
  const ref = useRef<NodeJS.Timer>();

  useEffect(() => {
    console.log('useEffect')
    ref.current && clearInterval( ref.current );
    ref.current = setInterval(() => setSeconds(seconds + 1), milliseconds);
  }, [seconds, milliseconds]);
  
  return (
    <>
      <h4>Timer: <small>{ seconds }</small></h4>
    </>
  )
}