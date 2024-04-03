import { Navigate, Route, Routes } from "react-router-dom"
import ScrollToTop from "./utils/scrollToTop"
import { Suspense, lazy, useState } from "react"
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
import Spinner from './components/ui/spinner/Spinner';
import Navbar from "./components/Navbar";
import Cart from "./components/cart/Cart";

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <>
      <Navbar setSearchQuery={setSearchQuery} />
      <Cart />

      <ScrollToTop>
        <Routes>
          {/* <Route path='/' element={<Navigate to='/products' />} /> */}

          <Route path="/products" element={
            <Suspense fallback={<Spinner />}>
              <ProductsPage searchQuery={searchQuery} />
            </Suspense>
          } />
          <Route path="/products/:id" element={
            <Suspense fallback={<Spinner />}>
              <ProductPage />
            </Suspense>
          } />
        </Routes>
      </ScrollToTop>
    </>
  )
}

export default App
