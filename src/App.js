import { BrowserRouter as Router, Link, Route,Switch } from 'react-router-dom';
import ExTeacherPortal from './Components/TeacherPortal';
import ExStudentPortal from './Components/StudentPortal';
import Welcome from './Components/Welcome';
import Signin from './Components/SignIn'

import './App.css'

const App = () => {
  return (
    <Router>
    <div className="App">
    <Signin/>
     
     <Switch>
     <Route path="/signin" component={SignIn}/>
     <Route path='/welcome' component={Welcome}/>
     <Route path="/teacher" component={ExTeacherPortal}/>
     <Route path="/student" component={ExStudentPortal}/>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
