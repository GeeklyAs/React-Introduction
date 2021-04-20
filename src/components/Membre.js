import React, { Fragment } from 'react'

const Membre = ({ nom, children, age }) => {
  return (
    <React.Fragment>
        <h2 style={{ 
          backgroundColor: age < 25 ? 'yellow' : 'purple', 
          color: 'white' 
          }}> 
          {nom.toUpperCase()} : {age}</h2>
        { children ? <p>{children}</p> : <Fragment /> }
    </React.Fragment>
  )
}
export default Membre
