import { lazy } from 'react'

// CONSTANTS
import paths from 'src/constants/paths'

// PAGES
const DataGridFiltersAndTable = lazy(() => import('src/pages/DataGridFiltersAndTable/DataGridFiltersAndTable'))
const Home = lazy(() => import('src/pages/Home/Home'))

const routes = [
  {
    path: paths.home,
    element: <Home/>, 
  },
  {
    path: paths.dataGrid.filtersAndTable,
    element: <DataGridFiltersAndTable/>, 
  },
]

export default routes