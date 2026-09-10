/* The organic green wave from the client's banner and letterhead,
   reused as the transition between sections so the whole page reads
   as one continuous brand system. */

export default function Curve({
  fill = "#013e20",
  flip = false,
  gold = true,
  className = "",
  height = "h-[70px] sm:h-[110px]",
}: {
  fill?: string;
  flip?: boolean;
  gold?: boolean;
  className?: string;
  height?: string;
}) {
  return (
    <div
      className={`pointer-events-none w-full overflow-hidden leading-[0] ${height} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`h-full w-full ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M0,58 C230,6 520,0 770,42 C1010,82 1235,108 1440,68 L1440,120 L0,120 Z"
          fill={fill}
        />
        {gold && (
          <path
            d="M0,46 C230,-6 520,-12 770,30 C1010,70 1235,96 1440,56"
            fill="none"
            stroke="#c9a227"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.9"
          />
        )}
        <path
          d="M0,70 C230,18 520,12 770,54 C1010,94 1235,120 1440,80 L1440,120 L0,120 Z"
          fill={fill}
          opacity="0.55"
        />
      </svg>
    </div>
  );
}
