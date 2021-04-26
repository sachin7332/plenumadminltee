import './css/index.css';
import {Switch ,Route , Redirect} from "react-router-dom";
import Login from  './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Logout from './Pages/Logout';
import Owner from './Pages/Usermodule/Owner'
import Owntab from './Pages/Usermodule/Owntab'



const App = () => {
  return (
<>

<Switch>
<Route exact path="/logout" component={Logout} />
<Route exact path="/login" component={Login} />
<Route exact path="/register" component={Register} />
<Route exact path="/home" component={Home} />
<Route exact path="/owner" component={Owner} />
<Route exact path="/owntab/:id" component={Owntab} />
<Route exact path="/owntab/" component={Owntab} />
{/* <Redirect to="/register" /> */}

</Switch>



</>
  );
}

export default App;
