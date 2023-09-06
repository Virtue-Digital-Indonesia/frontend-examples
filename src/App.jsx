import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

// ROOT
import routes from './routes'

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        {routes.map((item, index) => (
          <Route 
            key={index}
            path={item.path} 
            element={item.element}
          />
        ))}
      </Routes>
    </Suspense>
  )
}

export default App
