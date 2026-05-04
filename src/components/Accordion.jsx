import { useState } from 'react'
import '../styles/accordion.css'
import { ChevronUp } from 'lucide-react'

export default function Accordion({ title, children, icon }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="accordion">
      <AccordionHeader handleOpen={handleOpen} isOpen={isOpen}>
        {icon && icon}
        {title}
      </AccordionHeader>
      <AccordionBody isOpen={isOpen}>{children}</AccordionBody>
    </div>
  )
}

export function AccordionHeader({ children, handleOpen, isOpen }) {
  return (
    <p onClick={handleOpen} className="accordion-header">
      {children}
      <ChevronUp className={`chevron ${isOpen && 'open'}`} />
    </p>
  )
}

export function AccordionBody({ children, isOpen }) {
  return <div className={`accordion-body ${isOpen && 'open'}`}>{children}</div>
}
