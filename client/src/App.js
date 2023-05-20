import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home.component.jsx'
import Navigation from './routes/navigation/navigation.component.jsx'
import Map from './routes/map/map.component.jsx'

const Login = () => {
  return (
    <div>
      I am the login page.
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='map' element={<Map />} />
      </Route>
    </Routes>
  )
}
export default App;
