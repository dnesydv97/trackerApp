import {FC} from 'react';
import Div from '../Div';
import Typography from '../Typography';
interface StatusProps {
  status?: any;
  style?: any;
}
const dangerStatus = ['Booked', 'Closed', 'Draft', 'Cancelled', 'Declined'];
const activeStatus = ['Open', 'Active', 'Completed', 'Processing'];
const Status: FC<StatusProps> = ({status, ...restProps}) => {
  return (
    <Div {...restProps} marginTop="md" marginBottom="xs">
      {!!dangerStatus.includes(status) && (
        <Div flexDirection="row" alignItems="center">
          <Div
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            circle={true}
            width={25}
            height={25}
            backgroundColor="danger"
            style={{marginRight: 7}}>
            {/* <AwesomeIcon size={14} name="times" color="white" /> */}
          </Div>
          <Typography size="lg" title={status} color="danger" />
        </Div>
      )}
      {!!activeStatus.includes(status) && (
        <Div flexDirection="row" alignItems="center">
          <Div
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            circle={true}
            width={10}
            height={10}
            backgroundColor="darkGreen"
            style={{marginRight: 7}}>
          </Div>
          <Typography size="lg" title={status} color="darkGreen" />
        </Div>
      )}
    </Div>
  );
};

export default Status;
