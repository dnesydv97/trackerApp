import {FC} from 'react';
import Div from '../Div';
import {ActivityIndicator} from 'react-native';
interface InitialLoaderProps {
  size?: any;
  color?: string;
}
const InitialLoader: FC<InitialLoaderProps> = ({size = 'large', color}) => {
  return (
    <Div flexDirection="row" justifyContent="center" style={{width: '100%'}}>
      <ActivityIndicator size={size} color={color} />
    </Div>
  );
};

export default InitialLoader;
