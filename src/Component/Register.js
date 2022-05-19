import React, { useState } from 'react'

const Register = () => {
    var [name,setName]=useState("")
    var [email,setEmail]=useState("")
    var [uname,setUname]=useState("")
    var [pass,setPass]=useState("")
    var [cpass,setCpass]=useState("")
    const changeData=()=>{
        const data={"name":name,"email":email,"uname":uname,"pass":pass,"cpass":cpass}
        console.log(data)
    }
  return (
    <div>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h1>REGISTR HERE</h1>
                </div>

                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <label for="" class="form-label">Email</label>
                  <input onChange={(e)=>{setEmail(e.target.value)}} type="text" class="form-control"/>
              </div>
              <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" class="form-label">Username</label>
                <input onChange={(e)=>{setUname(e.target.value)}} type="text" class="form-control"/>
              </div>
              <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" class="form-label">Password</label>
                <input onChange={(e)=>{setPass(e.target.value)}} type="text" class="form-control"/>
            </div>
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <label for="" class="form-label">Confirm Password</label>
              <input onChange={(e)=>{setCpass(e.target.value)}} type="text" class="form-control"/>
          </div>
                
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={changeData} class="btn btn-success">REGISTER</button>
                </div>
                
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <a href="#">New user click Here</a>
                </div>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default Register