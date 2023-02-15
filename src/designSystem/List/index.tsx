import {FC} from 'react';
import {FlatList} from 'react-native';

interface ListProps {
  numColumns?: any;
  renderItem?: any;
  keyExtractor: any;
  scrollIndicatorInsets?: any;
  columnWrapperStyle?: any;
  data?: any;
  onEndReached?: any;
  ListFooterComponent?: any;
  onEndReachedThreshold?: any;
  renderSectionHeader?: any;
  stickySectionHeadersEnabled?: boolean;
  onMomentumScrollBegin?: any;
}

const List: FC<ListProps> = ({renderItem, keyExtractor, ...restProps}) => {
  return <FlatList renderItem={renderItem} keyExtractor={keyExtractor} {...restProps} />;
};

export default List;
