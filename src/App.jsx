import './App.css'
import Navbar from './components/navbar'
import { Route, Routes } from 'react-router-dom'
import Beranda from './pages/beranda'
import TentangKami from './pages/tentangkami'
import Terapis from './pages/terapis'
import BeritaPromo from './pages/beritapromo' 
import Testimoni from './pages/testimoni' 
import Gallery from './pages/galeri'
import Footer from './components/footer'

function App() {

  return (
    <div className=''>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Beranda/>}/>
        <Route path='/tentang-kami' element={<TentangKami/>}/>
        <Route path='/terapis' element={<Terapis/>}/>
        <Route path='/berita-dan-promo' element={<BeritaPromo/>}/>
        <Route path='/galleri' element={<Gallery/>}/>
        <Route path='/testimoni' element={<Testimoni/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
