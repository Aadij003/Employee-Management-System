import React, { useContext, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useState } from 'react'
import AuthProvider from './context/AuthProvider'

  const App = () => {
   
    const [user, setUser] = useState(null)
      const authData =useContext(AuthProvider)


    const handleLogin=(email,password)=>{
     if(email=='admin@gmail.com' && password=='123'){
     setUser("admin")
     }
     else if(email=='user@gmail.com' && password=='123'){
      setUser("employee")
     }
     
     else{
      alert("invalid credentials")
     }
    }

        

return (
  <>
    {!user && <Login handleLogin={handleLogin} />}

    {user === 'admin' && <AdminDashboard />}

    {user === 'employee' && <EmployeeDashboard />}
  </>
)
}

export default App
