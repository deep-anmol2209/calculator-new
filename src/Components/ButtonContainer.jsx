import React from 'react'
import Styles from "./ButtonContainer.module.css"
export const ButtonContainer = ({buttonlist, fun}) => {
    
  return (
    
    <div className={Styles.container}>
        {buttonlist.map((buttons)=>
           <button onClick={()=>fun(buttons.value)} className={Styles.buttonStyle}>{buttons.button}</button>
        )}
        
       
        
    </div>
  )
}
