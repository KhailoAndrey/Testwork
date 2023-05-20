
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { lazy } from 'react';

const Home = lazy(() => import('../Pages/Home'));
const UserCard = lazy(() => import('../Usercard/UserCard'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<UserCard />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
