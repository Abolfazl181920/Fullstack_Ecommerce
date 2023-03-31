import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { page } from '../constants/index'

const MainRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route element={ <page.Home /> } path='/' />
            <Route element={ <page.Signup /> } path='/signup' />
            <Route element={ <page.Dashboard /> } path='/dashboard' />
            <Route element={ <page.Payment /> } path='/payment' />
            <Route element={ <page.Checkout /> } path='/checkout' />
            <Route element={ <page.Address /> } path='/address' />
            <Route element={ <page.Bag /> } path='/bag' />
            <Route element={ <page.Notfound /> } path='*' />
        </Routes>
    </Router>
  )
}

export default MainRoutes