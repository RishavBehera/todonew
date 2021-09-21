import { BrowserRouter as Router, Link, Route,Switch } from 'react-router-dom';
import ExTeacherPortal from './Components/TeacherPortal';
import ExStudentPortal from './Components/StudentPortal';
import Welcome from './Components/Welcome';

import './App.css'

const App = () => {
  return (
    <Router>
    <div className="App">
     <Welcome/>
     <nav>
       <ul>
          <li><Link className="link" to="/teacher">Teacher</Link></li>
          <li><Link className="link" to="/student">Student</Link></li>
        </ul>
     </nav>
     <Switch>
     <Route path='/welcome' component={Welcome}/>
     <Route path="/teacher" component={ExTeacherPortal}/>
     <Route path="/student" component={ExStudentPortal}/>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
