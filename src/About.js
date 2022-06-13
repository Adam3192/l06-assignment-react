import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import ListGroup from 'react-bootstrap/ListGroup'

function About() {
  let navigate = useNavigate()

  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <ListGroup className="w-75">{}</ListGroup>
        <h1>Experience</h1>
        <p>
          Hello! My name is Adam and I am a Full Stack Web Developer from
          Alabama.
        </p>
      </Stack>
    </>
  )
}

export default About

