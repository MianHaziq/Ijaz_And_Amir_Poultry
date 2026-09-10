/* The four brand pillars, drawn to match the icon set on the client's
   letterhead and business card: single-weight line work inside a ring. */

type IconProps = { className?: string };

const base = "h-full w-full";

export function BroilerIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M12.5 7.2c.4-1.6 2.2-2.2 3.2-1.1.9-1.4 3-1 3.3.7 1.4-.4 2.6.8 2.2 2.2"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M21.2 9c2.5.9 4.1 3.3 4.1 6 0 3.9-3.2 7-7.4 7h-3c-4.1 0-7.4-3.1-7.4-7 0-3.3 2.4-6.1 5.7-6.8"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
      />
      <path d="M25.3 13.6l3.4 1.4-3.4 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.5 22v4M19.5 22v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="21.4" cy="13.4" r="1.15" fill="currentColor" />
    </svg>
  );
}

export function FeedIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 27c0-8.5 4.6-14.2 11.5-15.4C27.5 20 22.8 25.6 16 27Z"
        stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"
      />
      <path d="M16 27C16 18.5 11.4 12.8 4.5 11.6 4.5 20 9.2 25.6 16 27Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M16 27V13.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 13.5c0-3.2 1.5-5.6 4-6.9-.4 3.3-1.8 5.6-4 6.9Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function BiosecurityIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 3.8l9.4 3.6v7.2c0 5.9-3.9 11.2-9.4 13-5.5-1.8-9.4-7.1-9.4-13V7.4L16 3.8Z"
        stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"
      />
      <path d="M11.6 15.9l3.1 3.2 6-6.4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GrowthIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path d="M5 27h22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="7.5" y="17.5" width="4.4" height="7" rx="1.3" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14.3" y="12.5" width="4.4" height="12" rx="1.3" stroke="currentColor" strokeWidth="1.6" />
      <rect x="21.1" y="7" width="4.4" height="17.5" rx="1.3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.3 3.5h3l1.6 4-2 1.4a12 12 0 0 0 5.9 5.9l1.4-2 4 1.6v3a2 2 0 0 1-2.2 2A17.4 17.4 0 0 1 4.3 5.7a2 2 0 0 1 2-2.2Z"
        stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2.8" y="5" width="18.4" height="14" rx="2.4" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.4 7.2 12 13l8.6-5.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PinIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 21.5s7-6 7-11.2A7 7 0 0 0 5 10.3C5 15.5 12 21.5 12 21.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="12" cy="10.2" r="2.6" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.6.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.6-1.2a.6.6 0 0 0 0-.6l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.4.7 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.2-.3-.2-.6-.4Z" />
    </svg>
  );
}
