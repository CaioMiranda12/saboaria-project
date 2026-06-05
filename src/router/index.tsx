import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Processo from '../pages/Processo'
import Contato from '../pages/Contato'
import Produtos from '../pages/Produtos'
import NaoEncontrada from '../pages/NaoEncontrada'
import { Equipe } from '../pages/Equipe'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/produtos', element: <Produtos /> },
      { path: '/processo', element: <Processo /> },
      { path: '/equipe', element: <Equipe /> },
      { path: '/contato', element: <Contato /> },
      { path: '*', element: <NaoEncontrada /> },
    ],
  },
])