import {FC, ReactNode} from 'react';
import styled from 'styled-components';
import Div from '../Div';
import Column from '../Column';
import AwesomeIcon from '../Icon';
import Scroll from '../Scroll';
import Typography from '../Typography';
import Base from '../Base';
import {Container} from '@app/components';
interface ModalOverlayProps {
  children?: ReactNode;
  visible?: boolean;
  setVisible?: any;
  onRequestClose?: () => void;
  isView?: boolean;
  title?: string;
}

const StyleModal = styled.Modal``;

const ModalOverlay: FC<ModalOverlayProps> = ({
  children,
  visible = false,
  setVisible,
  isView,
  title,
  ...restProps
}) => {
  return (
    <StyleModal animationType="slide" transparent={true} visible={visible} {...restProps}>
      <Base header={ {
        title:'Maps'
      }}> 
          <Column
            style={{position: 'relative', width: '100%', height: '100%', flex: 1}}
            marginTop="1x">
            {isView ? children : <Scroll>{children}</Scroll>}
          </Column>
      </Base>
    </StyleModal>
  );
};

export default ModalOverlay;
