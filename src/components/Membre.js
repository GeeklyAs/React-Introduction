import React, { Fragment } from 'react'

const Membre = ({ nom, children, age, cacherNom, handleChange }) => {
  return (
    <React.Fragment>
        <h2 style={{ 
          backgroundColor: age < 25 ? 'yellow' : 'purple', 
          color: 'white' 
          }}> 
          {nom.toUpperCase()} : {age}
          </h2>
          <button onClick={cacherNom}>X</button>
          <input value={nom} onChange={handleChange} type='text'/>

        { children ? <p>{children}</p> : <Fragment /> }
    </React.Fragment>
  )
}
export default Membre
