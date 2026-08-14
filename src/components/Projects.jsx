import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import { projects } from '../data/resume'

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 border-t border-surface-border">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading
          route="/projects"
          title="Selected builds"
          description="Four full-stack platforms, each with a Spring Boot API underneath and a React interface on top. Links point to source, live deployment, and Swagger docs where available."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
