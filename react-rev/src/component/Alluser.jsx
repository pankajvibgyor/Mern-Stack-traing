import React,{useEffect,useState} from 'react'
// import DeleteUser from './DeleteUser';
import {Link} from 'react-router-dom'

function Alluser() {
    const[data,setData]=useState([]);

    useEffect(() => {
       getUser()
        
    }, [])
    const getUser=async ()=>{
       await fetch("http://localhost:4000/get").then((response) =>{
            response.json().then((resp)=>{            
                setData(resp)
            })
            
        })

    }
//    const {id}=useParams();
    const deleteUser = async(id) => { 
        await fetch(`http://localhost:4000/delete/${id}`, {method:'delete'})
        
        //  axios.delete(`http://localhost:4000/delete/${id}`,{method:'delete'})
        // .then((res) => {
        //     console.log('response',res);
        // })
        // .catch((error) => {
        //     console.log('error block called',error);
        // })
        
    //     setData(data.filter(user => user.id !== id))
    getUser()
    window.alert(`deleted successfully`)
        }
          
        
          
    return (
        
             
    <div>
    <table className="table ">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">gender</th>
                        <th scope="col">email</th>
                        <th scope="col">password</th>
                        <th scope="col">delete</th>
                        <th scope="col">Update</th>
                        
                     
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user,i)=>{
                           return( 
                            <tr key={user._id}>
                                <td>{i}</td>
                                <td >{user.firstName}</td>
                                <td >{user.lastName}</td>
                                <td >{user.Gender}</td>
                                <td >{user.email}</td>
                                <td >{user.password}</td>
                                <td><button className='btn btn-danger mx-2' onClick={()=>deleteUser(user._id)}> Delete</button></td>
                                <td> <Link to={`/edit/${user._id}`} className='btn btn-warning'>Edit </Link></td>

                               
                                
                            </tr>

                        )})
                    }
                    
                </tbody>
            </table>
      
            
        </div>
    )
}

export default Alluser
