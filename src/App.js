import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Jobs from './Jobs'
import JobDetail from './JobDetail'
import jobData from './job-data'
import Hello from './Hello'

function App() {
let jobs = jobData

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Hello />} />
          <Route path="jobs" element={<Jobs jobs={jobs} />}>
            <Route index element={<p>Select a Job for more details</p>} />
            <Route path=":jobDetail" element={<JobDetail jobs={jobs} />}/>
          </Route>
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

