import Input from '../components/Input'
import Label from '../components/Label'
import '../styles/main.css'
import Accordion from '../components/Accordion'
import { CircleUserRound, GraduationCap, BriefcaseBusiness } from 'lucide-react'

export default function Main() {
  return (
    <main>
      <section className="form-section">
        <form action="">
          <Accordion
            icon={<CircleUserRound className="accordion-icon" />}
            title="1. General information"
          >
            <div className="input-wrapper">
              <div className="input-group">
                <Label htmlFor="fullname">Full Name</Label>
                <Input type="text" id="fullname" placeholder="John Doe" />
              </div>
              <div className="input-group">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div className="input-group">
                <Label htmlFor="phone">Phone Number</Label>
                <Input type="phone" id="phone" placeholder="+1 555 123 4567" />
              </div>
            </div>
          </Accordion>

          <Accordion
            icon={<GraduationCap className="accordion-icon" />}
            title="2. Education"
          >
            <div className="input-wrapper">
              <div className="input-group">
                <Label htmlFor="school-name">School Name</Label>
                <Input
                  type="text"
                  id="school-name"
                  placeholder="University of Example"
                />
              </div>
              <div className="input-group">
                <Label htmlFor="title-of-study">Title of Study</Label>
                <Input
                  type="text"
                  id="title-of-study"
                  placeholder="Bachelor of Science in CS"
                />
              </div>
              <div className="input-group">
                <Label htmlFor="date-of-study">Date of Study</Label>
                <Input
                  type="text"
                  id="date-of-study"
                  placeholder="Sep 2015 - Jun 2019"
                />
              </div>
            </div>
          </Accordion>

          <Accordion
            icon={<BriefcaseBusiness className="accordion-icon" />}
            title="3. Practical Experience"
          >
            <div className="input-wrapper">
              <div className="input-group">
                <Label htmlFor="company-name">Company Name</Label>
                <Input
                  type="text"
                  id="company-name"
                  placeholder="Example Corporation"
                />
              </div>
              <div className="input-group">
                <Label htmlFor="position-title">Position Title</Label>
                <Input
                  type="text"
                  id="position-title"
                  placeholder="Software Developer"
                />
              </div>
              <div className="input-group flex-start">
                <Label htmlFor="responsibilities">Main Responsibilities</Label>
                <textarea
                  name="responsibilities"
                  id="responsibilities"
                  rows={4}
                  placeholder=""
                ></textarea>
              </div>

              <div className="input-group">
                <Label htmlFor="from">From</Label>
                <Input type="text" id="from" placeholder="Jan 2020" />
              </div>

              <div className="input-group">
                <Label htmlFor="to">To</Label>
                <Input type="text" id="to" placeholder="Present" />
              </div>
            </div>
          </Accordion>
        </form>
      </section>
      <section className="cv-section"></section>
    </main>
  )
}
