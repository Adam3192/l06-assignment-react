import ListGroup from 'react-bootstrap/ListGroup'
import Stack from 'react-bootstrap/Stack'
import { Link, Outlet, useSearchParams } from 'react-router-dom'
import './Jobs.css'

function Jobs(props) {

 function jobList() {
  if (props.jobs === null) {
    return
  }

  return props.jobs.map((job) => (
    <ListGroup.Item key={job.id}>
      <Link to={`/jobs/${job.id}`} key={job.id}>
        {job.title}
      </Link>
      <p>{job.company}</p>
    </ListGroup.Item>
  ))
}

 return (
   <>
       <Stack className = "container" direction="horizontal" gap={3}>
        <ListGroup className="w-75">{jobList()}</ListGroup>
        <Outlet />
      </Stack>
   </>
   
 )
}

export default Jobs

