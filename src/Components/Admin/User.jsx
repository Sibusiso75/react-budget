import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaHome } from 'react-icons/fa'

function User() {
    let {id}=  useParams() 
    let navigate = useNavigate()
    const users = useSelector(state=>state.users.users)
    const user = users.find(u=>u.id==id)
    const [email, setEmail]= useState(user.email)
    const [age, setAge]= useState(user.age)
    const [gender, setGender]= useState(user.gender)
    const [isAdmin, setIsAdmin]= useState(user.isAdmin)
   
    const [username, setUsername]= useState(user.username)
    
      return (
    <div>
         <button onClick={()=>navigate("/admin/dashboard")} 
      style={{background:"green", color:"whitesmoke", fontWeight:"bold"}}>
        <FaHome/> Back home
      </button>
   <form style={{margin:"30px"}}>

        <input type="text" 
           minLength={2}
           required
           value={username}
           onChange={(e)=>setUsername(e.target.value)}
           
           
           
           placeholder='Username'/>
            <input type="email" 
                      
                      value={email}
                      required
                      onChange={(e)=>setEmail(e.target.value)}
                      placeholder='Email'/>
                       <input type="number" 
                      value={age}
                      
                      required
                      onChange={(e)=>setAge(e.target.value)}
                      placeholder='Age'/>
                      
                 <select onChange={(e)=>setGender(e.target.value)}
                  placeholder='Gender' 
                  
                  value={gender}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                      </select>
                      
                      <select onChange={(e)=>setIsAdmin(e.target.value)}
                  value={isAdmin}>
                   <option value="No">No</option>
                    <option value="Yes">Yes</option>
                      </select>   
                      <button type="submit" className='btn2'>Update</button>
                      </form>
                    
           
    </div>
  )
}

export default User