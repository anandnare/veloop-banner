import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SvgDefs } from './components/shared/Svg.jsx';
import Home from './pages/Home.jsx';
import Placeholder from './pages/Placeholder.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <SvgDefs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<Placeholder />} />
      </Routes>
    </BrowserRouter>
  );
}
