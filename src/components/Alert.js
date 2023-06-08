import React from 'react'

export default function Alert(props) {
 
  return (
    props.alert &&<div>
     <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <section>{props.alert.type} {props.alert.msg}</section>
 
</div>
</div>
   
  )
}
