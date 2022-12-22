import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './components/App'
import './index.css'
import { Rotte } from './types/global'

const ROUTES: Rotte = {
  app: { key: 1, component: App, path: '/' },
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {Object.entries(ROUTES).map((el) => {
          const Component = el[1].component
          return (
            <Route key={el[1].key} path={el[1].path} element={<Component />} />
          )
        })}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
