import { FileText } from 'lucide-react'
import Button from '../components/Button'
import '../styles/header.css'

export default function Header() {
  return (
    <header>
      <h1>
        <FileText size={32} color="var(--color-primary)" />
        CV Builder
      </h1>

      <Button type="primary">Download CV</Button>
    </header>
  )
}
