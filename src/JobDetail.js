import Card from 'react-bootstrap/Card'
import { useParams, useNavigate } from 'react-router-dom'

function JobDetail(props) {
  let params = useParams()
  let job = props.jobs.find(job => job.id === params.jobDetail);
  
  console.log(job);

  if (job ===  undefined) { 
    return <p>Job Not Found.</p> 
  }
  
  let { id, title, company, description, duration } = job

  return (
    <Card className="align-self-start w-25">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{company}</Card.Subtitle>
        <Card.Text>
          <strong>Description:</strong> <span>{description}</span>
        </Card.Text>
        <Card.Text>
          <strong>Years:</strong> <span>{duration}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default JobDetail
