import React ,{ useState} from 'react';
import {NavLink  , useHistory} from "react-router-dom";
import '../pluins/icheck-bootstrap/icheck-bootstrap.min.css';
import '../pluins/adminlte.min.css';
import '../pluins/fontawesome-free/css/all.min.css';
import '../css/index.css';

const Register = () => {

  const history = useHistory();
  const [cval, upval] = useState(
    {
         user : "",
         email : "" ,
         password : "",
         cpassword : "",
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
 
 
   const formSubmit = async(e) =>
   {
     e.preventDefault();
 

      const {user , email , password , cpassword}  = cval;

   const res = await fetch('/register' , {
     method: 'POST' ,
     headers: {
       "Content-Type" : "application/json"
     } ,
     body: JSON.stringify({user , email , password , cpassword})
   });

   const data = await res.json();

   if(data.status === 422 || !data)
   {
     window.alert("Invalid resigstrton");
   }else
   {
    window.alert(" resigstrton successful");
    history.push('/login')
   }

   }
 



    return (
        <>


<div className="hold-transition register-page"> 
<div className="register-box">
  <div className="register-logo">
    <a href="../../index2.html"><b>Admin</b>LTE</a>
  </div>

  <div className="card">
    <div className="card-body register-card-body">
      <p className="login-box-msg">Register a new membership</p>

      <form method="post">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Full name" name="user" value={cval.user} onChange={formChange} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user"></span>
            </div>
          </div>
        </div>
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
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Retype password" name="cpassword" value={cval.cpassword} onChange={formChange} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="agreeTerms" name="terms" value="agree"  />
              <label for="agreeTerms">
               I agree to the <a href="#">terms</a>
              </label>
            </div>
          </div>
          {/* <!-- /.col --> */}
          <div className="col-4">
            <button type="submit" className="btn btn-primary btn-block" onClick={formSubmit}>Register</button>
          </div>
          {/* <!-- /.col --> */}
        </div>
      </form>

      <div className="social-auth-links text-center">
        <p>- OR -</p>
        <a href="#" className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2"></i>
          Sign up using Facebook
        </a>
        <a href="#" className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2"></i>
          Sign up using Google+
        </a>
      </div>

      <NavLink to="/login" className="text-center">I already have a membership</NavLink>
    </div>
    {/* <!-- /.form-box --> */}
  </div>
  {/* <!-- /.card --> */}
</div>
{/* <!-- /.register-box --> */}

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

export default Register;

