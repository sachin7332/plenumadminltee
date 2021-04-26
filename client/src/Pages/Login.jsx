import React ,{ useState} from 'react';
import '../pluins/icheck-bootstrap/icheck-bootstrap.min.css';
import '../pluins/adminlte.min.css';
import '../pluins/fontawesome-free/css/all.min.css';
import '../css/index.css';
import {NavLink  , useHistory} from "react-router-dom";

 





const Login = () => {

    const history = useHistory();
    const [cval, upval] = useState(
        {
             
             email : "" ,
             password : "",
        }
       );
     

 
       const formChange = (event) =>
       {
     
     let {name  , value} = event.target;
     
     upval((cv) =>
     {
     
       return {
         ...cv,
         [name] : value
       }
     
     })
     
     
       }
     
     
       const formSubmit = async (e) =>
       {
         e.preventDefault();
     


         const { email , password }  = cval;

         const res = await fetch('/login' , {
           method: 'POST' ,
           headers: {
             "Content-Type" : "application/json" 
             
           } ,
           body: JSON.stringify({ email , password })
         });
      
         const data = await res.json();
      
         if(data.status === 400 || !data)
         {
           window.alert("Invalid users");
         }else
         {
          window.alert(" login successful");
          history.push('/home')
         }
      


       }
    return (
        <>

<div className="loghead">
<div className="login-box">
  <div className="login-logo">
    <a href="../../index2.html"><b>Admin</b>LTE</a>
  </div>
  {/* <!-- /.login-logo --> */}
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Sign in to start your session</p>

      <form method="post">
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" name="email" value={cval.email} onChange={formChange} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" name="password" value={cval.password} onChange={formChange} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label for="remember">
                Remember Me
              </label>
            </div>
          </div>
          {/* <!-- /.col --> */}
          <div className="col-4">
            <button type="submit" className="btn btn-primary btn-block" onClick={formSubmit}>Sign In</button>
          </div>
          {/* <!-- /.col --> */}
        </div>
      </form>

      <div className="social-auth-links text-center mb-3">
        <p>- OR -</p>
        <a href="#" className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
        </a>
        <a href="#" className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
        </a>
      </div>
      {/* <!-- /.social-auth-links --> */}

      <p className="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
      <p className="mb-0">
        <NavLink to="/register" className="text-center">Register a new membership</NavLink>
      </p>
    </div>
    {/* <!-- /.login-card-body --> */}
  </div>
</div>
{/* <!-- /.login-box --> */}

{/* <!-- jQuery --> */}
<script src="../../plugins/jquery/jquery.min.js"></script>
{/* <!-- Bootstrap 4 --> */}
<script src="../../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
{/* <!-- AdminLTE App --> */}
<script src="../../dist/js/adminlte.min.js"></script>
</div>
            
        </>
    )
}

export default Login
