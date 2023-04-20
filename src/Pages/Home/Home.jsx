import {
  Container,
  CardContainer,
  CardImage,
  CardIcon,
  BoyImg,
  Line,
  HomeTitle,
  HomeLink,
} from './Home.styled';
import goitIcon from '../../assets/Images/Goit-icon.png';
import cardImg from '../../assets/Images/card-img.png';
import boyImg from '../../assets/Images/boy.png';

const Home = () => {
  return (
    <Container>
      <CardContainer>
        <CardIcon src={goitIcon} alt="GOIT ICON" width="76" height="22" />
        <CardImage src={cardImg} alt="CARD IMG" width="308" height="168" />
        <BoyImg src={boyImg} alt="BOY IMG" width="80" height="80" />
        <Line></Line>
        <HomeTitle>TWEET CARDS!</HomeTitle>
        <HomeLink to="/tweets">GO TO TWEETS!</HomeLink>
      </CardContainer>
    </Container>
  );
};

export default Home;
