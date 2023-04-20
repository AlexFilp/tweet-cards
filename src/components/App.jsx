import { GlobalStyle } from './GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Suspense } from 'react';

const HomePage = lazy(() => import('../Pages/Home/Home'));
const TweetsPage = lazy(() => import('../Pages/Tweets/Tweets'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<h1>WAIT A SECOND</h1>}>
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
