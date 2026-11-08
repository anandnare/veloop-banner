import { useNavigate } from 'react-router-dom';
import { ChevronsRight } from 'lucide-react';
import styles from './RewardBanner.module.css';

export default function RewardBanner({
  theme = 'captcha',
  badge,
  heading,
  description,
  image,
  imageAlt = '',
  ctaText,
  route = '/',
  children,
}) {
  const navigate = useNavigate();
  const go = () => navigate(route);

  return (
    <section className={`${styles.banner} ${styles[theme] || ''}`} onClick={go}>
      <div className={styles.content}>
        {badge && <span className={styles.badge}>{badge}</span>}
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.desc}>{description}</p>

        {children}

        <button
          type="button"
          className={styles.cta}
          onClick={(e) => { e.stopPropagation(); go(); }}
        >
          {ctaText}
          <ChevronsRight size={18} className={styles.arrow} aria-hidden="true" />
        </button>
      </div>

      <div className={styles.media}>
        <div className={styles.float}>
          {image && <img src={image} alt={imageAlt} loading="lazy" />}
        </div>
      </div>
    </section>
  );
}
