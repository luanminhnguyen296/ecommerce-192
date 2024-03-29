import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route path="/" element={<PagesHome />} />
          <Route path="/products" element={<PagesProducts />} />
          <Route path="*" element={<PagesNotFound />} />
        </Route>
        <Route element={<LayoutAuth />}>
          <Route path="/login" element={<PagesLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
