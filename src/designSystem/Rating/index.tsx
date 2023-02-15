import {FC} from 'react';
import Div from '../Div';
import {Rating, AirbnbRating} from 'react-native-ratings';
interface ReviewRatingProps {
  rating?: number;
  size?: number;
  activeColor?: string;
  style?: any;
  gap?: number;
  type?: never | 'form';
  onFinishRating?: any;
  ratingStyle?: any;
  imageSize?: number;
}
const ReviewRating: FC<ReviewRatingProps> = ({
  rating = 0,
  size = 12,
  activeColor,
  gap,
  type,
  ratingStyle,
  imageSize = 40,
  onFinishRating,
  ...restProps
}) => {
  return (
    <Div flexDirection="row" alignItems="center" {...restProps}>
      {type === 'form' ? (
        <Rating
          onFinishRating={onFinishRating}
          startingValue={0}
          style={ratingStyle}
          imageSize={imageSize}
        />
      ) : (
        <AirbnbRating
          selectedColor="#007fff"
          count={5}
          defaultRating={rating}
          size={size}
          isDisabled
          showRating={false}
          starContainerStyle={{margin: 0}}
          ratingContainerStyle={{margin: 0}}
        />
      )}
    </Div>
  );
};

export default ReviewRating;
