import { Check } from 'lucide-react';
import RewardBanner from '../RewardBanner/RewardBanner.jsx';
import { Gem } from '../shared/Svg.jsx';
import img from '../../assets/captcha.png';
import styles from './CaptchaTasksBanner.module.css';

export default function CaptchaTasksBanner() {
  return (
    <RewardBanner
      theme="captcha"
      heading={<>Solve Captchas.<br /><span>Earn Gems.</span></>}
      description="Complete simple captcha tasks accurately and earn eligible Gem rewards."
      image={img}
      imageAlt="Laptop showing a captcha with purple gems"
      ctaText="START TASK"
      route="/captcha"
    >
      <div className={styles.flow}>
        <div className={styles.box}>K7M4</div>
        <span className={styles.dots}>···›</span>
        <div className={styles.circle}><Check size={20} aria-hidden="true" /></div>
        <span className={styles.dots}>···›</span>
        <div className={styles.box}><Gem size={26} /></div>
      </div>
    </RewardBanner>
  );
}