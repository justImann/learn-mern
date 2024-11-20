import { Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Toaster } from '@/components/ui/toaster';

// const routes = (
// );

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/create" exact element={<CreatePage />} />
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
};

export default App;
