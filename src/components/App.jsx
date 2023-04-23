import { GlobalStyle } from './GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Suspense } from 'react';
import { PageLoader } from '../components/PageLoader/PageLoader';

const HomePage = lazy(() => import('../Pages/Home/Home'));
const TweetsPage = lazy(() => import('../Pages/Tweets/Tweets'));

export const App = () => {
  return (
    <div
      style={{
        minWidth: '100vw',
        minHeight: '100vh',
        backgroundColor: '#8A2BE2',
      }}
    >
      <Suspense
        fallback={
          <div style={{ paddingTop: 250 }}>
            <PageLoader />
          </div>
        }
      >
        <Routes>
          <Route path="/" end element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
      <GlobalStyle />
    </div>
  );
};
