import {
  CardContainer,
  CardImage,
  CardIcon,
  ImgCircle,
  Avatar,
  Line,
  CardTweets,
  CardFolowers,
} from './CardItem.styled';
import goitIcon from '../../assets/Images/Goit-icon.png';
import cardImg from '../../assets/Images/card-img.png';
import imageContainer from '../../assets/Images/circle.png';
import { FollowButton } from '../../components/FollowBtn/FollowBtn';

export const CardsItem = ({
  followers,
  tweets,
  avatar,
  doFollowUser,
  doUnfollowUser,
  id,
  isLoading,
  followed,
}) => {
  // const [isLoading, setIsLoading] = useState(false);

  const getFollowers = () => {
    const followersNumber = followers;
    const arrayOfFollowers = Array.from(String(followersNumber));
    arrayOfFollowers.splice(-3, 0, ',');
    return arrayOfFollowers.join('');
  };

  const follow = () => {
    doFollowUser(id, followers);
  };

  const unfollow = () => {
    doUnfollowUser(id, followers);
  };

  return (
    <CardContainer>
      <CardIcon src={goitIcon} alt="GOIT ICON" width="76" height="22" />
      <CardImage src={cardImg} alt="CARD IMG" width="308" height="168" />

      <Line>
        <Avatar src={avatar} alt="BOY IMG" width="60" height="60" />
        <ImgCircle src={imageContainer} alt="BOY IMG" width="80" height="80" />
      </Line>
      <CardTweets>{tweets} TWEETS</CardTweets>
      <CardFolowers>{getFollowers()} FOLLOWERS</CardFolowers>
      <FollowButton
        selected={followed}
        disabled={isLoading ? true : false}
        onClick={followed ? unfollow : follow}
      >
        {followed ? 'FOLLOWING' : 'FOLLOW'}
      </FollowButton>
    </CardContainer>
  );
};
