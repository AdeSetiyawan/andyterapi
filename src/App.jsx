import './App.css'
import Navbar from './components/navbar'
import { Route, Routes } from 'react-router-dom'
import Beranda from './pages/beranda'
import TentangKami from './pages/tentangkami'
import Terapis from './pages/terapis'
import BeritaPromo from './pages/beritapromo'
import KontakKami from './pages/kontakkami'
import Gallery from './pages/galeri'

function App() {

  return (
    <div className=''>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Beranda/>}/>
        <Route path='/tentang-kami' element={<TentangKami/>}/>
        <Route path='/terapis' element={<Terapis/>}/>
        <Route path='/berita-dan-promo' element={<BeritaPromo/>}/>
        <Route path='/kontak-kami' element={<KontakKami/>}/>
        <Route path='/galleri' element={<Gallery/>}/>
      </Routes>
    </div>
  )
}

export default App
