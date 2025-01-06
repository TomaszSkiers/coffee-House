import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Container} from '@mui/material';
import { Home } from './pages/home';
import { Category } from './pages/category';
import { Product } from './pages/product';
import { Navigation } from './components/navigation';
import { Footer } from './components/footer';
import { Login } from './pages/login';
import { SignUp } from './pages/sign-up';

const AppStructure = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export const App = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route element={<AppStructure />}>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
};
