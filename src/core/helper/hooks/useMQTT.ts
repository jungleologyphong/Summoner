import {useContext} from 'react';
import {MQTTContext} from './mqtt';

const useMqtt = () => {
  return useContext(MQTTContext);
};
export default useMqtt;
