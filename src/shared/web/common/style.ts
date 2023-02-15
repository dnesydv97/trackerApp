import { css } from "styled-components";

const DisplayFlexRow = css`
  display: flex;
  flex-direction: row;
`;
const DisplayFlexColumn = css`
  display: flex;
  flex-direction: column;
`;
const RowAlignItemsCenter = css`
  ${DisplayFlexRow};
  align-items: center;
  justify-content: center;
`;
const ColunmAlignItemsCenter = css`
  ${DisplayFlexColumn};
  align-items: center;
`;
const ColunmAlignItemsJustifyCenter = css`
  ${DisplayFlexColumn};
  align-items: center;
`;
export {
  RowAlignItemsCenter,
  ColunmAlignItemsCenter,
  DisplayFlexRow,
  DisplayFlexColumn,
  ColunmAlignItemsJustifyCenter,
};
