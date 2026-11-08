import { Link, useParams } from 'react-router-dom';

const TITLES = {
  refer: 'Refer & Earn',
  'how-it-works': 'How Referrals Work',
  swap: 'Swap Center',
  bonus: 'Bonus VEs',
  captcha: 'Captcha Tasks',
  exchange: 'Exchange Center',
};

export default function Placeholder() {
  const { slug } = useParams();
  return (
    <main className="container py-5 text-center">
      <h1 className="h3 fw-bold">{TITLES[slug] ?? 'Page not found'}</h1>
      <p className="text-secondary">Demo route – the real page is built by the platform team.</p>
      <Link to="/" className="btn btn-outline-light">Back to banners</Link>
    </main>
  );
}
