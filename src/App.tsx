import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Courses } from './pages/Courses';
import { About } from './pages/About';
import { Gallery } from './pages/Gallery';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { ROUTES } from './lib/constants';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.COURSES} element={<Courses />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.GALLERY} element={<Gallery />} />
        <Route path={ROUTES.FAQ} element={<FAQ />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
