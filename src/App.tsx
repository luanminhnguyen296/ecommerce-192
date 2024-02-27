import Hello from '@/components/Hello'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutMain from '@/components/layout/LayoutMain';
import LayoutAuth from '@/components/layout/LayoutAuth';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route element={<LayoutAuth />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
