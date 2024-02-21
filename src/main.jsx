
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { Layout } from './component/Layout.jsx'
import { InfoMovie } from './component/InfoMovie.jsx'
import {Films} from './component/Films.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Films/>}/>
      </Route>
      <Route path='film/:id' element={<InfoMovie/>}/>
    </Routes>
  </BrowserRouter>
)
