import { Skills } from './Skills'
import { Experience } from './Experience'
import { Education } from './Education'

export const Profile = () => {
  return (
    <div className="cv-root">
      <div className="cv-body">
        <aside className="cv-sidebar">
          <Skills />
        </aside>
        <main className="cv-main">
          <Experience />
          <Education />
        </main>
      </div>
    </div>
  )
}
