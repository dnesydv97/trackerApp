import {FC} from 'react';
import {Dimensions} from 'react-native';
import Div from '../Div';
import Typography from '../Typography';
const {width} = Dimensions.get('window');
interface ItemsProps {
  title: string;
  value: string;
}
interface TabsProps {
  handleClick?: (value: string) => void;
  items: ItemsProps[];
  currentActive?: string;
}

const Tabs: FC<TabsProps> = ({handleClick, items, currentActive}) => {
  const tabWidth = width / items?.length;
  return (
    <Div flexDirection="row" justifyContent="space-between">
      {items?.map(item => {
        return (
          <Div
            touchable={true}
            paddingBottom="lg"
            style={{
              borderBottomWidth: currentActive === item?.value ? 2 : 0,
              borderColor: currentActive === item?.value ? '#007fff' : '',
              width: tabWidth,
            }}
            onPress={() => {
              handleClick(item?.value);
            }}>
            <Typography
              title={item?.title}
              size="lg"
              color={currentActive === item?.value ? 'primaryButton' : 'primaryTextColor'}
              fontWeight={600}
              textAlign="center"
              style={{width: '100%'}}
            />
          </Div>
        );
      })}
    </Div>
  );
};

export default Tabs;
