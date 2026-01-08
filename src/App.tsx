import './App.css'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<HomePage />} />
      <Route path="/project/:title" element={<ProjectPage />} />
    </Route>
  )
)

const App = () => {

  return (
    <RouterProvider router={router} />

  )
}

export default App
