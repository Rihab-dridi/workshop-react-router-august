import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import AboutUs from "./components/aboutUs";
import Profiles from "./components/profiles";
import User from "./components/user";
import { BrowserRouter as Router, Route,Switch  } from "react-router-dom";

//step1: import browerRouter
//step2: wrap the components inside of the BrowserRouter

//A: Simple Routing :
//step1: import Route
//step2: send the destination  component  in the Route component and specify the path
//step3:(inside the navbar compoenent) wrap the element that will lead you to the destination in a Link component and specify the destination 

//B:Dynamic Route:
//step1: send the destination  component (User) in the Route component and specify the path includin a variable (:ID)
//step2:(inside the profile compoenent) wrap the element that will lead you to the destination in a Link component 
//and specify the destination replacing the variable  with the real value (el.id)
//step4: (inside the user component )  receive the the value of the variable using match or useParams
//step4: (inside the user component ) find that specific user inside the data table using (find)

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/Profiles" component={Profiles} />
          <Route  path='/user/:ID'    component={User}    /> 
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
