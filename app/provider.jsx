"use client"
import { supabase } from '@/services/supabaseClient'
import React, { useEffect , useState, useContext} from 'react'
import { UserDetailContext } from '@/context/UserDetailContext'

const Provider = ({ children }) => {
  
  const [user,setUser] = useState();

  useEffect(() => {
    console.log("CreateNewUser triggered"); 
    CreateNewUser();
  }, [])

  const CreateNewUser = () => {
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      // Check if user already exists
      let { data: users, error } = await supabase
        .from('users') // lowercase 'users' as per your table
        .select('*')
        .eq('email', user?.email)

      console.log(users) // will log empty array [] if user not found

      // If not, create new user
      if (users?.length === 0) {
        const { data, error } = await supabase
          .from('users')
          .insert([
            {
              name: user?.user_metadata?.name,
              email: user?.email,
              picture: user?.user_metadata?.picture,
            }
          ])
        console.log("User Created ",data);
        setUser(data);
        return;
      }
    setUser(users[0]); //it only prints some portion in the array at console
    });
  }
  
  // We have to wrap the context to use the user throughout the app
  return (
      
      <UserDetailContext.Provider value={{user,setUser}}>
      <div> {children} </div>
      </UserDetailContext.Provider>
  )
}

export default Provider

export const useUser = ()=>{
  const context = useContext(UserDetailContext);
  return context;
}