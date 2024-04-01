import { Navigate, Route, Routes } from "react-router-dom"
import ScrollToTop from "./utils/scrollToTop"
import { Suspense, lazy } from "react"
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
import Spinner from './components/ui/spinner/Spinner';
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <ScrollToTop>
        <Routes>
          <Route path="/products" element={
            <Suspense fallback={<Spinner />}>
              <ProductsPage />
            </Suspense>
          } />
          <Route path="/products/:id" element={
            <Suspense fallback={<Spinner />}>
              <ProductPage />
            </Suspense>
          } />

          <Route path='*' element={<Navigate to='/products' />} />
        </Routes>
      </ScrollToTop>
    </>
  )
}

export default App
