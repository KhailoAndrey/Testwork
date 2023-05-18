import './App.css';
import UserCard from '../Usercard/UserCard';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import Home from '../Pages/Home';
import { NotFoundPage } from 'components/Pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<UserCard />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
