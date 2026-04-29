import '../styles/button.css'

export default function Button({ children, type }) {
  return <button className={type}>{children}</button>
}
