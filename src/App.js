import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
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

     <Route path="/teacher" component={ExTeacherPortal}/>
     <Route path="/student" component={ExStudentPortal}/>
    </div>
    </Router>
  );
}

export default App;
