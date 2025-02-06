import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { Container } from '@mui/material'
import { Home } from './pages/home'
import { Category } from './pages/category'
import { Product } from './pages/product'
import { Navigation } from './components/navigation'
import { Footer } from './components/footer'
import { Login } from './pages/login'
import { SignUp } from './pages/sign-up'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LoginConfirmation } from './pages/login-confirmation'
import { Dashboard } from './pages/dashboard/dashboard'
import { UserProvider } from './contexts/signIn-login-context/userContext'

const AppStructure = () => {
  return (
    <>
      <Navigation />
      <Container sx={{ flexGrow: '1' }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}

export const App = () => {
  const queryClient = new QueryClient()

  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppStructure />}>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/category/:id" element={<Category />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/confirmation" element={<LoginConfirmation />} />
              <Route path="/dash" element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </UserProvider>
  )
}
