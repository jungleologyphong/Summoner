import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string, params?: any) {
  if (navigationRef.isReady()) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    navigationRef.navigate(name, params);
  }
}
