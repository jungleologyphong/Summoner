import {locale} from '~language';
export type Keys = keyof typeof locale.en;
import {useIntl} from 'react-intl';
export const useAltaIntl = () => {
  const intl = useIntl();
  const formatMessage = (key: Keys, values?: any): string => {
    return intl.formatMessage({id: key}, values);
  };
  const translate = (key: Keys) => {
    return intl.formatMessage({id: key, defaultMessage: key});
  };

  return {
    intl,
    formatMessage,
    translate,
  };
};
