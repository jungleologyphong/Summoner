import {useRef} from 'react';

import _BackgroundTimer from 'react-native-background-timer';
export interface useTimeoutProps {
  value: number;
  timeoutFunction?: () => void;
  setTime?: (value: number) => void;
}
export const useTimeout = () => {
  const time = useRef<number | any>();
  const TimeoutFunction = (value: number, timeoutFunction: () => void) => {
    return setTimeout(() => {
      timeoutFunction && timeoutFunction();
    }, value);
  };
  const timeOut = (value: number, timeoutFunction: () => void) => {
    time.current = TimeoutFunction(value, timeoutFunction);
    return time.current;
  };
  const timeOutClear = (time: any) => {
    clearTimeout(time);
  };

  return {timeOut, timeOutClear};
};
