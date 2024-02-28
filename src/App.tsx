import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import { Home } from './pages';
// const { default: PagesHomes } = await import('@/pages/Home.tsx')
// console.log("🚀 ~ LayoutsLayoutAuth:", PagesHomes())


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutsLayoutMain />}>
          <Route path="/" element={<PagesHome />} />
          <Route path="/products" element={<PagesProducts />} />
          <Route path="*" element={<PagesNotFound />} />
        </Route>
        <Route element={<LayoutsLayoutAuth />}>
          <Route path="/login" element={<PagesLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
