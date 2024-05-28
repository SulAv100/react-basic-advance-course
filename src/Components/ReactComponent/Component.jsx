import React from 'react'
import { useContext } from 'react'
import userContext from '../Context/Context'


function Component() {

  const {userName, surName} = useContext(userContext);
  return (
    <>
        <h1>This is one {userName} {surName} that can be resued in App.jsx</h1>
    </>
)
}

export default Component