import profileData from '@/data/profile.json';
import type { Project } from '@/types/profile';

// Validate URL is safe (http/https only)
const isValidUrl = (url: string): boolean => {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
};

export default function Projects() {
  const featuredProjects = profileData.projects.filter(p => p.featured);
  const otherProjects = profileData.projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-6 bg-light-surface dark:bg-dark-surface">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>
        
        {/* Featured Projects */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-primary">Featured</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.url} project={project} />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-light-muted dark:text-dark-muted">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <ProjectCard key={project.url} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  // Only render if URL is valid
  if (!isValidUrl(project.url)) {
    return null;
  }

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group p-6 bg-light-bg dark:bg-dark-bg rounded-lg border border-light-muted/20 dark:border-dark-muted/20 hover:border-primary transition-all hover:scale-105"
    >
      <div className="flex items-start justify-between mb-3">
        <h4 className="text-lg font-bold group-hover:text-primary transition-colors">{project.title}</h4>
        {project.stars > 0 && (
          <span className="flex items-center gap-1 text-sm text-light-muted dark:text-dark-muted">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {project.stars}
          </span>
        )}
      </div>
      <p className="text-sm text-light-muted dark:text-dark-muted mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech: string, i: number) => (
          <span
            key={i}
            className="text-xs px-2 py-1 bg-light-surface dark:bg-dark-surface rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
}
