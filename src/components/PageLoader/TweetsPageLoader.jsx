import { LoaderContainer } from './TweetsPageLoader.styled';
import { Watch } from 'react-loader-spinner';

export const TweetsPageLoader = () => {
  return (
    <LoaderContainer>
      <Watch
        height="40"
        width="40"
        radius="48"
        color="#ebd8ff"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderContainer>
  );
};
