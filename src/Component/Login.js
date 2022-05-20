import React, { useState } from 'react'

const Login = () => {
    var [uname,setUname]=useState("")
    var [pass,setPass]=useState("")
    const changeData=()=>{
        const data={"username":uname,"pass":pass}
        console.log(data)
    }
  return (
    <div><div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            
            <div class="row g-2">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h1>LOGIN HERE</h1>
                </div>

                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Username</label>
                    <input onChange={(e)=>{setUname(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <label  for="" class="form-label">Password</label>
                  <input onChange={(e)=>{setPass(e.target.value)}} type="text" class="form-control"/>
              </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={changeData} class="btn btn-primary">Login</button>
                </div>
                
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <a href="Register">Back to Login</a>
                </div>
            </div>
        </div>
    </div>
</div>

</div>
  )
}

export default Login