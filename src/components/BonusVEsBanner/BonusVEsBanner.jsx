import { CalendarCheck, UserPlus, ListChecks } from 'lucide-react';
import RewardBanner from '../RewardBanner/RewardBanner.jsx';
import styles from './BonusVEsBanner.module.css';
import bonusArt from '../../assets/bonus-art.png';

const ITEMS = [
  { Icon: CalendarCheck, title: 'Daily Check-in', sub: 'Stay active' },
  { Icon: UserPlus, title: 'Invite Friends', sub: 'Grow together' },
  { Icon: ListChecks, title: 'Complete Tasks', sub: 'Earn more' },
];

export default function BonusVEsBanner() {
  return (
    <RewardBanner
      theme="bonus"
      badge="BONUS VEs"
      heading={<>Boost Your<br /><span>VE Balance</span></>}
      description="Complete eligible activities and unlock additional VEs through special bonus opportunities."
      image={bonusArt}
      imageAlt="A steel vault surrounded by VE coins and purple gems"
      ctaText="EXPLORE BONUSES"
      route="/bonus"
    >
      <ul className={styles.list}>
        {ITEMS.map(({ Icon, title, sub }) => (
          <li key={title} className={styles.item}>
            <Icon size={18} className={styles.icon} aria-hidden="true" />
            <span className={styles.text}>
              <strong>{title}</strong>
              <span>{sub}</span>
            </span>
          </li>
        ))}
      </ul>
    </RewardBanner>
  );
}
