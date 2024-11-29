import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import ImpresoraCoop from '../src/pages/cargaElementos/impresoras/ImpresoraCoop';
import PcEscritorio from '../src/pages/cargaElementos/PcEscritorio/PcEscritorio';
import ElementosInformatico from '../src/pages/cargaElementos/otrosElementos/ElementosInformatico';

function App() {

  return (
    <>
      <div>
        {/**Rutas */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>{/**Logueo para la aplicacion */}
            <Route path='/Home' element={<Home/>}/>{/**Menu Principal */}
            <Route path='/ImpresoraCoop' element={<ImpresoraCoop/>}/>{/** Menu de Impresoras*/}
            <Route path='/PcEscritorio' element={<PcEscritorio/>}/>{/**Menu de Pc de Escritorio */}
            <Route path='/ElementosInformatico' element={<ElementosInformatico/>}/>{/** */}
          </Routes>
        </BrowserRouter>

      </div>  
    </>
  )
}

export default App
