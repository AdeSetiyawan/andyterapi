import './App.css'
import Navbar from './components/navbar'
import { Route, Routes } from 'react-router-dom'
import Beranda from './pages/beranda'
import TentangKami from './pages/tentangkami'
import LayananKami from './pages/layanankami'
import Terapis from './pages/terapis'
import Lokasi from './pages/lokasi'
import BeritaPromo from './pages/beritapromo'
import KontakKami from './pages/kontakkami'
import Testimoni from './pages/testimoni'

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
      </Routes>
    </div>
  )
}

export default App
