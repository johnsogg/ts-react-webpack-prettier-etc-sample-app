/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Button } from '@material-ui/core';

export interface OnlineStoreProps {
  storeId: string;
  storeName: string;
}

export const OnlineStore: React.FC<OnlineStoreProps> = ({
  storeId,
  storeName,
}: OnlineStoreProps) => (
  <BigProudText>
    <span>Store ID: {storeId}</span>
    <span>Store Name: {storeName}</span>
    <Button onClick={() => console.log('You totally pressed my buttons')}>Press Me</Button>
  </BigProudText>
);

const BigProudText = styled.div`
  color: rebeccapurple;
  font-family: 'Courier';
  font-size: 28px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
