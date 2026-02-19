import Typography from '../../ui/Typography/Typography';
import Button from '../../ui/Button/Button';
import styles from '../Projects.module.css';
import { Project } from '../../../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <Typography variant="h2">
          {project.title}
        </Typography>

        <Typography variant="tag" className={styles.category}>
          {project.category}
        </Typography>
      </div>

      <div className={styles.imageWrapper}>
        <img src={project.img} alt={project.title} className={styles.image} />
      </div>
      
      <div className={styles.content}>
        <Typography variant="body" className={styles.description}>
          {project.description}
        </Typography>

        <div className={styles.tags}>
          {project.tags.map(tag => (
            <span key={tag} className={styles.tagItem}>{tag}</span>
          ))}
        </div>

        <div className={styles.actions}>
          {project.linkLive && (
            <Button href={project.linkLive} variant="primary">
              Live Demo
            </Button>
          )}
          {project.linkApple && (
            <Button href={project.linkApple} variant="primary">
              App Store
            </Button>
          )}
          {project.linkGoogle && (
            <Button href={project.linkGoogle} variant="primary">
              Google Play
            </Button>
          )}
          {project.linkGithub && (
            <Button href={project.linkGithub} variant="outline">
              View Code
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;