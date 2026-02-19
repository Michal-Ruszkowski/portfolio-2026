import ProjectCard from './ProjectCard/ProjectCard';
import { projects } from '../../data/projects';
import styles from './Projects.module.css';
import Section from '../ui/Section/Section';

const Projects = () => {
  return (
    <Section id="projects" title="Featured Projects" isAlternative={true}>
      <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
    </Section>
  );
};

export default Projects;