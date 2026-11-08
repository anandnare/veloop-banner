/* Reusable SVG illustrations for VELOOP banners */

export function Gem({ size = 40, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="gemTop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ddd6fe" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <polygon points="32,6 54,24 32,58 10,24" fill="#7c3aed" />
      <polygon points="32,6 54,24 32,28 10,24" fill="url(#gemTop)" />
      <polygon points="32,28 54,24 32,58" fill="#5b21b6" />
      <polygon points="32,28 10,24 32,58" fill="#6d28d9" />
    </svg>
  );
}

export function Coin({ size = 40, label = 'VE', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="coinGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fde68a" />
          <stop offset="1" stopColor="#d9a441" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="29" fill="#b8832a" />
      <circle cx="32" cy="32" r="25" fill="url(#coinGrad)" />
      <circle cx="32" cy="32" r="19" fill="none" stroke="#b8832a" strokeWidth="1.5" opacity=".6" />
      <text x="32" y="39" textAnchor="middle" fontSize="19" fontWeight="800"
            fontFamily="Inter, Arial, sans-serif" fill="#7a5410">{label}</text>
    </svg>
  );
}

export function SwapArrows({ size = 40, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}
         stroke="#f6d77e" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
         aria-hidden="true">
      <path d="M12 24h38M42 14l10 10-10 10" />
      <path d="M52 44H14M22 34L12 44l10 10" />
    </svg>
  );
}

export function Arrow({ size = 40, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}
         stroke="#f6d77e" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
         aria-hidden="true">
      <path d="M10 32h42M38 18l14 14-14 14" />
    </svg>
  );
}

export function CheckBadge({ size = 40, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="28" fill="#1e2447" stroke="#d9a441" strokeWidth="3" />
      <path d="M20 33l8 8 16-18" fill="none" stroke="#f6d77e" strokeWidth="6"
            strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Shield({ size = 40, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M32 6l22 8v16c0 14-9 24-22 28C19 54 10 44 10 30V14z"
            fill="#1e2447" stroke="#8b5cf6" strokeWidth="3" />
      <path d="M22 32l7 7 13-14" fill="none" stroke="#c4b5fd" strokeWidth="5"
            strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Gift({ size = 40, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect x="8" y="26" width="48" height="30" rx="4" fill="#4f46e5" />
      <rect x="6" y="20" width="52" height="12" rx="4" fill="#6366f1" />
      <rect x="28" y="20" width="8" height="36" fill="#f6d77e" />
      <path d="M32 20c-10-12-20-4-12 0M32 20c10-12 20-4 12 0"
            fill="none" stroke="#f6d77e" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export function Wallet({ size = 40, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect x="6" y="16" width="52" height="38" rx="8" fill="#1e2447" stroke="#6e96ff" strokeWidth="3" />
      <rect x="38" y="28" width="20" height="14" rx="5" fill="#13204a" stroke="#6e96ff" strokeWidth="3" />
      <circle cx="46" cy="35" r="3" fill="#f6d77e" />
    </svg>
  );
}

export function Sparkle({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 0c1 7 5 11 12 12-7 1-11 5-12 12-1-7-5-11-12-12 7-1 11-5 12-12z" fill="#f6d77e" />
    </svg>
  );
}
/* Shared gradient defs, mounted once in App.jsx */
export function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="gGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f6d77e" />
          <stop offset="1" stopColor="#d9a441" />
        </linearGradient>
      </defs>
    </svg>
  );
}
