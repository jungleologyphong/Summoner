import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useTimeout} from '~core';
import {LanguageSelector} from '~modules/setting';
export const AuthLogic = () => {
  const {language} = useSelector(LanguageSelector);
  const dispatch = useDispatch();
  const {timeOut, timeOutClear} = useTimeout();
  const [time, setTime] = useState(0);
  const test = () => {
    setTime(10);
  };
  useEffect(() => {
    let timeout: any;
    if (time > 0) {
      timeout = timeOut(1000, () => {
        setTime(time - 1);
      });
    }
    return () => timeOutClear(timeout);
  }, [time]);

  return {dispatch, language, time, test};
};
