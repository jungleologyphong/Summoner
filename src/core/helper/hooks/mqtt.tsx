import React, {useCallback, useRef, useState} from 'react';
import MQTT, {IMqttClient} from 'sp-react-native-mqtt';
import lodash, {toString} from 'lodash';
import {toObject} from '~core/helper/hoc';
import {randIdCreator} from '~core/helper/math';
import {env_set, name} from '~config';
import store from '~core/store';
import {setMqttConnected} from '~modules/setting';

export interface I_WILL {
  topic: string;
  msg: any;
}

interface I_MQTT {
  uri?: string;
  clientId?: string | number;
  keepalive?: boolean;
  user?: string;
  pass?: string;
  will?: I_WILL;
}

interface I_MESSAGE {
  retain: boolean;
  qos: number;
  data: string;
  topic: string;
}

export const MQTTContext = React.createContext<{
  mqtt?: IMqttClient;
  connected: boolean;
  subscribe: (
    topic: string | string[],
    callback: (data: any) => void,
    keyGroup?: string,
  ) => void;
  unsubscribe: (topic: string) => void;
  publish: (topic: string, payload: any, retain?: boolean) => void;
  disconnect: () => void;
  unsubscribeGroup: (key: string) => void;
  sendMessage?: any;
  message?: any;
}>({
  connected: false,
  subscribe: (
    topic: string | string[],
    callback: (data: any) => void,
    keyGroup?: string,
  ) => {},
  unsubscribe: (topic: string) => {},
  publish: (topic: string, payload: any, retain?: boolean) => {},
  disconnect: () => {},
  unsubscribeGroup: (key: string) => {},
});

const MQTTProvider: React.FC<{
  options?: I_MQTT;
  onMessage?: (message: I_MESSAGE) => void;
  onConnected?: (client: IMqttClient) => void;
}> = props => {
  const {options} = props;
  const mqttRef = useRef<IMqttClient | undefined>(undefined);
  const [connected, setConnected] = useState(false);
  const mqttStack = useRef<{[key: string]: (data: any) => void}>({});
  const mqttGroup = useRef<{[key: string]: string | string[]}>({});
  const [message, sendMessage] = useState();
  const subscribe = useCallback(
    (
      topic: string | string[],
      callback: (data: any) => void,
      keyGroup?: string,
    ) => {
      if (mqttRef.current == null) {
        return;
      }

      if (!lodash.isEmpty(keyGroup)) {
        mqttGroup.current[keyGroup || ''] = topic;
      }

      if (Array.isArray(topic)) {
        topic.forEach(t => {
          const willCard = t.replace(/(\/#)|(\/\+)/g, '/*');
          mqttStack.current[willCard] = callback;
          mqttRef.current?.subscribe(t, 2);
        });
      } else {
        const wildCard = topic.replace(/(\/#)|(\/\+)/g, '/*');
        mqttStack.current[wildCard] = callback;
        mqttRef.current.subscribe(topic, 2);
      }
    },
    [mqttRef.current],
  );

  const unsubscribe = useCallback(
    topic => {
      if (mqttRef.current == null) {
        return;
      }
      mqttRef.current.unsubscribe(topic);
    },
    [mqttRef.current],
  );

  const unsubscribeGroup = useCallback(
    key => {
      if (mqttRef.current == null) {
        return;
      }

      const topic = mqttGroup.current[key];

      if (lodash.isEmpty(topic)) {
        return;
      }

      if (Array.isArray(topic)) {
        topic.forEach(t => {
          if (!lodash.isEmpty(t)) {
            mqttRef.current?.unsubscribe(t);
          }
        });
      } else {
        mqttRef.current.unsubscribe(topic);
      }
    },
    [mqttRef.current, mqttGroup.current],
  );

  const publish = useCallback(
    (topic, payload, retain?: boolean) => {
      if (mqttRef.current == null) {
        return;
      }
      const _plain_payload = toString(payload);

      mqttRef.current.publish(topic, _plain_payload, 2, retain || false);
    },
    [mqttRef.current],
  );

  const disconnect = useCallback(() => {
    if (mqttRef.current == null) {
      return;
    }

    mqttRef.current.disconnect();
  }, [mqttRef.current]);

  const onMessageArrived = useCallback(
    (message: I_MESSAGE) => {
      Object.keys(mqttStack.current).forEach(key => {
        const regex = RegExp(key);
        if (message.topic.match(regex)) {
          const callback = mqttStack.current[key];
          if (callback != null) {
            callback(toObject(message.data));
          }
        }
      });
      if (props?.onMessage) {
        props.onMessage(message);
      }
    },
    [props?.onMessage],
  );

  React.useEffect(() => {
    const deviceId = randIdCreator().replace(/[^a-zA-Z0-9]+/g, '');

    const option: any = {
      uri: options?.uri || env_set[name].mqtt,
      clientId: `mobile.${options?.clientId || 'unknown'}.${deviceId}`,
      user: options?.user,
      pass: options?.pass,
      clean: true,
      will: options?.will != null,
      willTopic: options?.will?.topic,
      willtopic: options?.will?.topic,
      willMsg: toString(options?.will?.msg),
      willQos: 2,
      automaticReconnect: true,
      keepAlive: 10000,
    };

    MQTT.createClient(option).then(client => {
      client.on('connect', function () {
        setConnected(true);
        store.dispatch(setMqttConnected(true));
        props?.onConnected && props?.onConnected(client);
      });
      client.on('closed', function () {
        store.dispatch(setMqttConnected(false));

        setConnected(false);
      });
      client.on('message', onMessageArrived);
      client.on('error', function (error) {
        if (error.indexOf('ConnectionLost') >= 0) {
          setConnected(false);
          store.dispatch(setMqttConnected(false));
        }
      });

      client.connect();
      mqttRef.current = client;
    });
    return () => {
      if (mqttRef.current != null) {
        mqttRef.current.disconnect();
        store.dispatch(setMqttConnected(false));

        setConnected(false);
      }
    };
  }, [options?.uri, options?.will, options?.clientId, props?.onConnected]);

  return (
    <MQTTContext.Provider
      value={{
        mqtt: mqttRef.current,
        connected,
        subscribe,
        unsubscribe,
        publish,
        disconnect,
        unsubscribeGroup,
        sendMessage,
        message,
      }}>
      {props.children}
    </MQTTContext.Provider>
  );
};

export default MQTTProvider;
