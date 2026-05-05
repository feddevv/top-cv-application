import Input from '../components/Input'
import Label from '../components/Label'
import '../styles/main.css'
import Accordion from '../components/Accordion'
import {
  CircleUserRound,
  GraduationCap,
  BriefcaseBusiness,
  icons,
} from 'lucide-react'
import { PDFViewer } from '@react-pdf/renderer'
import CV from '../components/CV'
import { useState } from 'react'

export default function Main() {
  const [fullname, setFullname] = useState('')
  const [position, setPosition] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [schoolName, setSchoolName] = useState('')
  const [titleOfStudy, setTitleOfStudy] = useState('')
  const [dateOfStudy, setDateOfStudy] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [responsibilities, setResponsibilities] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  return (
    <main>
      <section className="form-section">
        <form action="" noValidate>
          <Accordion
            icon={<CircleUserRound className="accordion-icon" />}
            title="1. General information"
          >
            <div className="input-wrapper">
              <div className="input-group">
                <Label htmlFor="fullname">Full Name</Label>
                <Input
                  type="text"
                  id="fullname"
                  placeholder="John Doe"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>
              <div className="input-group">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="john.doe@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  type="phone"
                  id="phone"
                  placeholder="+1 555 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
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
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                />
              </div>
              <div className="input-group">
                <Label htmlFor="title-of-study">Title of Study</Label>
                <Input
                  type="text"
                  id="title-of-study"
                  placeholder="Bachelor of Science in CS"
                  value={titleOfStudy}
                  onChange={(e) => setTitleOfStudy(e.target.value)}
                />
              </div>
              <div className="input-group">
                <Label htmlFor="date-of-study">Date of Study</Label>
                <Input
                  type="text"
                  id="date-of-study"
                  placeholder="Sep 2015 - Jun 2019"
                  value={dateOfStudy}
                  onChange={(e) => setDateOfStudy(e.target.value)}
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
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
              <div className="input-group">
                <Label htmlFor="position-title">Position Title</Label>
                <Input
                  type="text"
                  id="position-title"
                  placeholder="Software Developer"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                />
              </div>
              <div className="input-group flex-start">
                <Label htmlFor="responsibilities">Main Responsibilities</Label>
                <textarea
                  name="responsibilities"
                  id="responsibilities"
                  rows={4}
                  placeholder=""
                  value={responsibilities}
                  onChange={(e) => setResponsibilities(e.target.value)}
                ></textarea>
              </div>

              <div className="input-group">
                <Label htmlFor="from">From</Label>
                <Input
                  type="text"
                  id="from"
                  placeholder="Jan 2020"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                />
              </div>

              <div className="input-group">
                <Label htmlFor="to">To</Label>
                <Input
                  type="text"
                  id="to"
                  placeholder="Present"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                />
              </div>
            </div>
          </Accordion>
        </form>
      </section>
      <section className="cv-section">
        <PDFViewer
          showToolbar={false}
          style={{ width: '100%', height: '100%' }}
        >
          <CV
            fullname={fullname}
            position={position}
            email={email}
            phone={phone}
            schoolName={schoolName}
            titleOfStudy={titleOfStudy}
            dateOfStudy={dateOfStudy}
            companyName={companyName}
            responsibilities={responsibilities}
            from={from}
            to={to}
          />
        </PDFViewer>
      </section>
    </main>
  )
}
