import { useState } from 'react'
import '../styles/accordion.css'
import { ChevronUp } from 'lucide-react'

export default function Accordion({ title, children, icon, id }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="accordion">
      <AccordionHeader
        handleOpen={handleOpen}
        isOpen={isOpen}
        aria-expanded={isOpen}
        aria-controls={id}
      >
        {icon && icon}
        {title}
      </AccordionHeader>
      <AccordionBody id={id} isOpen={isOpen}>
        {children}
      </AccordionBody>
    </div>
  )
}

export function AccordionHeader({ children, handleOpen, isOpen, ...props }) {
  return (
    <h2 className="accordion-header">
      <button onClick={handleOpen} type="button" {...props}>
        {children}
        <ChevronUp className={`chevron ${isOpen && 'open'}`} />
      </button>
    </h2>
  )
}

export function AccordionBody({ children, isOpen, id }) {
  return (
    <div
      id={id}
      style={{ display: isOpen ? 'block' : 'none' }}
      className={`accordion-body ${isOpen && 'open'}`}
    >
      {children}
    </div>
  )
}
