import { LOGIN} from '../../config/Paths'
import {Navigate, useLocation} from 'react-router-dom'

function PrivateRoute ({children}) {
  const isAuthenticated = window.localStorage.getItem('successfullyLogin') ?? false
  const location = useLocation()

  console.log('Hola soy un PrivateRoute')

  if (!isAuthenticated) {
    return <Navigate to={`/${LOGIN}`} replace state={{location}} />
  }

  return children
    
}

export default PrivateRoute