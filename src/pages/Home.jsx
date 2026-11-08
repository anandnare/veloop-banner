import ReferEarnBanner from '../components/ReferEarnBanner/ReferEarnBanner.jsx';
import SwapCenterBanner from '../components/SwapCenterBanner/SwapCenterBanner.jsx';
import BonusVEsBanner from '../components/BonusVEsBanner/BonusVEsBanner.jsx';
import CaptchaTasksBanner from '../components/CaptchaTasksBanner/CaptchaTasksBanner.jsx';
import ExchangeCenterBanner from '../components/ExchangeCenterBanner/ExchangeCenterBanner.jsx';

export default function Home() {
  return (
    <main className="container py-4 py-md-5">
      <h1 className="h3 fw-bold mb-4">VELOOP Rewards</h1>
      <div className="d-flex flex-column gap-4">
        <ReferEarnBanner />
        <SwapCenterBanner />
        <BonusVEsBanner />
        <CaptchaTasksBanner />
        <ExchangeCenterBanner />
      </div>
    </main>
  );
}
