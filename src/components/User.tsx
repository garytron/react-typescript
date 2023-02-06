import { useState } from 'react';

interface iUser {
  uid: string;
  name: string;
}

export const User = () => {
  const [user, setUser] = useState<iUser>();

  const login = () => {
    setUser({
      uid: 'E-7',
      name: 'Ellie',
    });
  }
  return(
    <>
      <h3>User</h3>
      <button  className='btn btn-outline-primary' onClick={ login }>
        Login
      </button>
      {
        !user ?
        <pre>No user</pre>
        :
        <pre>
          { JSON.stringify(user) }
        </pre>
        }
    </>
  )
}