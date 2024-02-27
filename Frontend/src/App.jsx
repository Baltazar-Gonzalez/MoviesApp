import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppLayout } from './components/Layout'
import { Home } from './screens/Home'
import { Search } from './screens/Search'
import { Login } from './screens/Login'
import { Register } from './screens/Register'
import { Media } from './screens/Media'
import { NotFound } from './screens/NotFound'

function App() {
    return (
        <BrowserRouter>
            <AppLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/:media/:id" element={<Media />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AppLayout>
        </BrowserRouter>
    )
}

export default App
