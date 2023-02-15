import * as Images from '@app/images';
import {BaseContainer, Div, Typography, Avatar} from '@app/designSystem';

const options = {
  favorite: {
    desc: 'No data available right now. ',
    image: Images.FavoriteIcon,
  },
  history: {
    desc: 'No data available right now. ',
    image: Images.HistoryIcon,
  },
  chat: {
    desc: 'No data available right now. ',
    image: Images.ChatIcon,
  },
  transaction: {
    desc: 'No data available right now. ',
    image: Images.HistoryIcon,
  },
};
export default ({mode}) => {
  return (
    <BaseContainer
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Div alignItems="center" justifyContent="center">
        <Avatar source={options[mode].image} height={200} width={200} resizeMode="contain" />
        <Typography
          title={options[mode].desc}
          color="primaryTextColor"
          size="lg"
          style={{
            textAlign: 'center',
            marginTop: 15,
            marginBottom: 20,
          }}
        />
      </Div>
    </BaseContainer>
  );
};
