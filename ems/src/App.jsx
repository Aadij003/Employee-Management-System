import React, { useContext, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useState } from 'react'
import {AuthContext} from './context/AuthProvider'


  const App = () => {
   
    const [user, setUser] = useState(null)
    const [loggedInUserData, setloggedInUserData] = useState(null)
      const authData =useContext(AuthContext)
      
        useEffect(() => {
       
       const loggedInUser=localStorage.getItem('loggedInUser')

          if(loggedInUser){
            const userData=JSON.parse(loggedInUser)
            setUser(userData.role)
            setloggedInUserData(userData.data)
          }

        },[])
        


    const handleLogin=(email,password)=>{
     if(email=='admin@gmail.com' && password=='123'){
     setUser("admin")
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
     }
     else if(authData){
      const employee= authData.employees.find((e)=>e.email==email && e.password==password)

      if(employee){
        setUser("employee")
        setloggedInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
      }
     
     }
     
     else{
      alert("invalid credentials")
     }
    }

        

return (
  <>
    {!user && <Login handleLogin={handleLogin} />}

    {user === 'admin' && <AdminDashboard />}

    {user === 'employee' && <EmployeeDashboard data={loggedInUserData} />}
  </>
)
}

export default App
