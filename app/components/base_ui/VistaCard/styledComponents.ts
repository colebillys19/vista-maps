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
  margin: 0 2.4rem 2.4rem;
  padding: 0;
`;

export const StyledCardContent = styled(CardContent)`
  padding: 1.2rem 1.2rem 2.4rem !important;
`;

export const StyledCardMedia = styled(CardMedia)`
  height: 20rem;
`;
