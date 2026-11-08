import RewardBanner from '../RewardBanner/RewardBanner.jsx';
import swapArt from '../../assets/swap-art.png';

export default function SwapCenterBanner() {
  return (
    <RewardBanner
      theme="swap"
      badge="SWAP CENTER"
      heading={<><span>Swap</span> Center</>}
      description="Convert eligible reward balances between supported currencies."
      image={swapArt}
      imageAlt="A VE card and an SVE card with a swap icon between them, next to a wallet app"
      ctaText="OPEN SWAP CENTER"
      route="/swap"
    />
  );
}
