import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchUsers } from '../features/users/usersSlice';


function Users(){

    const users = useSelector((state)=> state.users)
    const dispatch = useDispatch();

     console.log(users);

    useEffect(()=>{
       dispatch(fetchUsers());
    },[]);

    return <div>   
        {users.loading ? <h3>Loading...</h3>: null}
        {users.users.length ? users.users.map(x=><p key={x.id}>{x.name}</p>):null}   
           </div>

}
export default Users;