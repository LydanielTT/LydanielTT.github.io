import data from '../data.json'
import { useTheme } from '../hooks/useTheme'
import './Header.scss'

export const Header = () => {
  const { dark, toggle } = useTheme()

  return (
    <header className="cv-header">
      <div className="cv-header-name">
        <h1>
          {data.name.first} {data.name.last}
        </h1>
        <button className="cv-theme-toggle" onClick={toggle} aria-label="Toggle theme">
          {dark ? '☀️' : '🌙'}
        </button>
      </div>
      <div className="cv-header-title">
        {data.title.split('\n').map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </header>
  )
}
