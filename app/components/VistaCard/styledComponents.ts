import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

export const Detail = styled.div`
  font-size: 1.4rem;
`;

export const DetailLabel = styled.span`
  color: #ccc;
  font-size: 1.4rem;
`;

export const Name = styled.div`
  margin: 0;
`;

export const StyledCard = styled(Card)`
  border: 0.3rem solid #333;
  border-radius: 1rem;
  margin: 0 1rem 1rem;
  padding: 0;
  :last-of-type {
    margin-bottom: 0;
  }
`;

export const StyledCardContent = styled(CardContent)`
  padding: 1.2rem;
  &.MuiCardContent-root {
    padding-bottom: 2.4rem;
  }
`;

export const StyledCardMedia = styled(CardMedia)`
  height: 20rem;
`;
