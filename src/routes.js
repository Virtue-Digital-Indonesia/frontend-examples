import { lazy } from 'react'

// PAGES
const Home = lazy(() => import('src/pages/Home/Home'))

const routes = [
  {
    path: '/',
    element: <Home/>, 
  },
]

export default routes