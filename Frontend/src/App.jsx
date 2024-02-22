import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './screens/Home'
import { Search } from './screens/Search'
import { Media } from './screens/Media'
import { NotFound } from './screens/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/:media/:id" element={<Media/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
