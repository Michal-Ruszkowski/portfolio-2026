import Typography from '../ui/Typography/Typography';
import ProjectCard from './ProjectCard/ProjectCard';
import { projects } from '../../data/projects';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section className={styles.projectsSection} id="projects">
      <div className="container">
        <Typography variant="h2" className={styles.sectionTitle}>
          Wybrane Projekty
        </Typography>
        
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;