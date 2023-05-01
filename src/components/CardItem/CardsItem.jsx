import PropTypes from 'prop-types';
import {
  CardContainer,
  CardImage,
  CardIcon,
  ImgCircle,
  Avatar,
  Line,
  CardTweets,
  CardFolowers,
  FollowButton,
} from './CardItem.styled';
import goitIcon from '../../assets/Images/Goit-icon.png';
import cardImg from '../../assets/Images/card-img.png';
import imageContainer from '../../assets/Images/circle.png';
import { TweetsPageLoader } from 'components/PageLoader/TweetsPageLoader';

export const CardsItem = ({
  followers,
  tweets,
  avatar,
  doFollowUser,
  doUnfollowUser,
  setBtn,
  id,
  isLoading,
  followed,
}) => {
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

  const followersNumber = getFollowers();

  return (
    <CardContainer>
      <CardIcon src={goitIcon} alt="GOIT ICON" width="76" height="22" />
      <CardImage src={cardImg} alt="CARD IMG" width="308" height="168" />

      <Line>
        <Avatar src={avatar} alt="BOY IMG" width="60" height="60" />
        <ImgCircle src={imageContainer} alt="BOY IMG" width="80" height="80" />
      </Line>
      <CardTweets>{tweets} TWEETS</CardTweets>
      <CardFolowers>{followersNumber} FOLLOWERS</CardFolowers>
      <FollowButton
        followed={followed}
        disabled={isLoading ? true : false}
        onClick={followed ? unfollow : follow}
      >
        {isLoading ? <TweetsPageLoader /> : followed ? 'FOLLOWING' : 'FOLLOW'}
      </FollowButton>
    </CardContainer>
  );
};

CardsItem.propTypes = {
  followers: PropTypes.number.isRequired,
  tweets: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  doFollowUser: PropTypes.func.isRequired,
  doUnfollowUser: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  followed: PropTypes.bool.isRequired,
};
