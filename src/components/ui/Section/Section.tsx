// import { ReactNode } from 'react';
// import styles from './Section.module.css';
// import Typography from '../Typography/Typography';

// interface SectionProps {
//   id: string;
//   title: string;
//   children: ReactNode;
//   isAlternative?: boolean;
//   as?: 'section' | 'footer';
// }

// const Section = ({ id, title, children, isAlternative = false }: SectionProps) => {
//   return (
//     <section 
//       id={id} 
//       className={`${styles.section} ${isAlternative ? styles.alternativeBg : ''}`}
//     >
//       <div className={styles.container}>
//         <Typography variant="h2" className={styles.sectionTitle}>
//           {title}
//         </Typography>
//         {children}
//       </div>
//     </section>
//   );
// };

// export default Section;


import { ReactNode } from 'react';
import styles from './Section.module.css';
import Typography from '../Typography/Typography';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  isAlternative?: boolean;
  as?: 'section' | 'footer';
}

const Section = ({ 
  id, 
  title, 
  children, 
  isAlternative = false, 
  as: Component = 'section' 
}: SectionProps) => {
  return (
    <Component 
      id={id} 
      className={`${styles.section} ${isAlternative ? styles.alternativeBg : ''} ${Component === 'footer' ? styles.isFooter : ''}`}
    >
      <div className={styles.container}>
        <Typography variant="h2" className={styles.sectionTitle}>
          {title}
        </Typography>
        {children}
      </div>
    </Component>
  );
};

export default Section;