import Stack from 'react-bootstrap/Stack'
import './Hello.css'

function Hello() {
 return (
      <div className="container">
        <div>
          <h1>Adam Dixon</h1>
          <p>Welcome to my Job Portfolio</p>
        </div>
        <img width = "355" height = "355" src = {require("./Images/Selfie.png")} alt = ""></img>
      </div>
 )
}

export default Hello
