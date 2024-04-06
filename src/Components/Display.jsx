
import Styles from "./Display.module.css"
import React from 'react'

 const Display = ({value}) => {
  return (
    <div >
        <input  className={Styles.displayStyle} type="text" value={value} />
    </div>
  )
}
export default Display