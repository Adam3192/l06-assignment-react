import Stack from 'react-bootstrap/Stack'
import './Hello.css'

function Hello() {
 return (
   <>
      <Stack direction="horizontal" gap={3} className="col-md-10 mx-auto">
      <div>
        <h1 className="test">Adam Dixon</h1>
        <p>Welcome to my Job Portfolio</p>
      </div>
        <img width = "455" height = "455" src = {require("./Images/Selfie.png")} alt = ""></img>
      </Stack>
   </>
 )
}

export default Hello
