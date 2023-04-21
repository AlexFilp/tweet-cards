import { LoaderContainer } from './PageLoader.styled';
import { Watch } from 'react-loader-spinner';

export const PageLoader = () => {
  return (
    <LoaderContainer>
      <Watch
        height="100"
        width="100"
        radius="48"
        color="#5736A3"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderContainer>
  );
};
