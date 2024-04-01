import { Navigate, Route, Routes } from "react-router-dom"
import ScrollToTop from "./utils/scrollToTop"
import { Suspense, lazy } from "react"
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
import Spinner from './components/ui/spinner/Spinner';

function App() {
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path="/products" element={
            <Suspense fallback={<Spinner />}>
              <ProductsPage />
            </Suspense>
          } />

          <Route path='*' element={<Navigate to='/products' />} />
        </Routes>
      </ScrollToTop>
    </>
  )
}

export default App
