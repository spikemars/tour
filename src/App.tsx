/**
 * 应用主路由配置
 * 管理页面间的导航和路由
 */

import { HashRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Itinerary from './pages/Itinerary'
import ArtFestival from './pages/ArtFestival'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/art-festival" element={<ArtFestival />} />
      </Routes>
    </HashRouter>
  )
}
