import {useEffect} from 'react';
import {BackHandler} from 'react-native';
function useBackButton(handler: () => any) {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handler);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handler);
    };
  }, [handler]);
}

export default useBackButton;
