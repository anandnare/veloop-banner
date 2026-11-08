import RewardBanner from '../RewardBanner/RewardBanner.jsx';
import { Gem, Coin, SwapArrows } from '../shared/Svg.jsx';
import styles from './ExchangeCenterBanner.module.css';
import exchangeArt from '../../assets/exchange-art.png';

const STEPS = [
  { label: 'GEM', node: <Gem size={26} /> },
  { label: 'CONVERT', node: <SwapArrows size={26} /> },
  { label: 'VE', node: <Coin size={26} /> },
];

export default function ExchangeCenterBanner() {
  return (
    <RewardBanner
      theme="exchange"
      badge="EXCHANGE CENTER"
      heading={<>Convert <span className="acc-p">Gems</span> to <span className="acc-g">VEs</span></>}
      description="Exchange eligible Gems into VEs and grow your VE balance."
      image={exchangeArt}
      imageAlt="A GEM card and a VE card showing the rate 1 GEM = 100 VE"
      ctaText="OPEN EXCHANGE CENTER"
      route="/exchange"
    >
      <ol className={styles.steps} aria-label="Gem, convert, VE">
        {STEPS.map((s, i) => (
          <li key={s.label} className={styles.step}>
            <span className={styles.node}>{s.node}</span>
            <small>{s.label}</small>
            {i < STEPS.length - 1 && <span className={styles.dots} aria-hidden="true">·····›</span>}
          </li>
        ))}
      </ol>
    </RewardBanner>
  );
}
