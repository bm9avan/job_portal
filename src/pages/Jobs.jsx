import React from 'react'

const Jobs = () => {
  fetch("http://localhost:8080/get").then((v)=>v.json()).then((v)=>console.log(v))
  return (
    <div style={{fontSize:"100px"}}>
      jobs
    </div>
  )
}

export default Jobs
