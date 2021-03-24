import React,{useEffect} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './Logout.css'

function Logout() {
    const history = useHistory();

useEffect(() => {
    axios.delete('http://localhost:5000/api/users/logout')
    .then(res=>{
      console.log(res)
      history.push('/login')
    })
    .catch(err=>console.log('....',err))
}, [])

  
    return (
        <div>
            
        </div>
    )
}

export default Logout
