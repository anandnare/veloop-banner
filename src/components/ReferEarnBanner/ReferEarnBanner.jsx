import { useState } from 'react'
import { Users, Copy, Check, Gift } from 'lucide-react'
import RewardBanner from '../RewardBanner/RewardBanner.jsx'
import styles from './ReferEarnBanner.module.css'
import referArt from '../../assets/refer-art.png'

const CODE = 'VELOOP123'

export default function ReferEarnBanner() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (e) => {
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(CODE)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <RewardBanner
      theme="refer"
      badge="REFER & EARN"
      heading={<>Refer Friends,<br /><span>Earn Rewards</span></>}
      description="Invite your friends to VELOOP Rewards and earn exciting rewards together."
      image={referArt}
      imageAlt="Two friends with a gift box and a referral code card"
      ctaText="Invite Now"
      route="/refer"
    >
      <div className={styles.meta}>
          <div className={styles.code}>
            <span className={styles.label}>Your Referral Code</span>
            <div className={styles.row}>
              <strong>{CODE}</strong>
              <button
                type="button"
                className={styles.copy}
                onClick={handleCopy}
                aria-label={copied ? 'Code copied' : 'Copy referral code'}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
          </div>

          <div className={styles.rewards}>
            <div>
              <small>You Earn (sample)</small>
              <strong>
                <Gift size={14} aria-hidden="true" /> 500 VEs
              </strong>
            </div>
            <div>
              <small>Friend Gets (sample)</small>
              <strong>
                <Users size={14} aria-hidden="true" /> 200 VEs
              </strong>
            </div>
          </div>
      </div>
    </RewardBanner>
  )
}