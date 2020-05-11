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
  border-radius: 0;
  border-bottom: 0.1rem solid #ccc;
  box-shadow: none;
  margin: 0 2rem 1rem;
  padding: 0;
  :last-of-type {
    margin-bottom: 0;
  }
`;

export const StyledCardContent = styled(CardContent)`
  background: rgb(255,255,255);
  background: linear-gradient(170deg, rgba(255,255,255,1) 0%, rgba(244,244,249,1) 75%, rgba(233,232,242,1) 100%);
  border-radius: 0;
  padding: 1.2rem 2.4rem;
  &.MuiCardContent-root {
    padding-bottom: 2.4rem;
  }
`;

export const StyledCardMedia = styled(CardMedia)`
  height: 20rem;
`;
