import './Welcome.css'

const Welcome = () => {
    return (
      <nav>
          <h1>Welcome</h1>
       <ul>
          <li><Link className="link" to="/teacher">Teacher</Link></li>
          <li><Link className="link" to="/student">Student</Link></li>
        </ul>
     </nav>
    )
}

export default Welcome
