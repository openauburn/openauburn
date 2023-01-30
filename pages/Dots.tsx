export interface DotsProps extends React.ComponentPropsWithoutRef<'svg'> {
    size?: number;
    radius?: number;
  }
  
  export function Dots({ size = 250, radius = 10, ...others }: DotsProps) {

    const w = "8"
    const h = "8"

    return (
      <svg
        aria-hidden
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 250 250"
        width={size}
        height={size}
        {...others}
      >
        <rect width={w} height={h} rx={radius} />
        <rect width={w} height={h} x="60" rx={radius} />
        <rect width={w} height={h} x="120" rx={radius} />
        <rect width={w} height={h} x="20" rx={radius} />
        <rect width={w} height={h} x="80" rx={radius} />
        <rect width={w} height={h} x="140" rx={radius} />
        <rect width={w} height={h} x="40" rx={radius} />
        <rect width={w} height={h} x="100" rx={radius} />
        <rect width={w} height={h} x="160" rx={radius} />
        <rect width={w} height={h} x="180" rx={radius} />
        <rect width={w} height={h} y="20" rx={radius} />
        <rect width={w} height={h} x="60" y="20" rx={radius} />
        <rect width={w} height={h} x="120" y="20" rx={radius} />
        <rect width={w} height={h} x="20" y="20" rx={radius} />
        <rect width={w} height={h} x="80" y="20" rx={radius} />
        <rect width={w} height={h} x="140" y="20" rx={radius} />
        <rect width={w} height={h} x="40" y="20" rx={radius} />
        <rect width={w} height={h} x="100" y="20" rx={radius} />
        <rect width={w} height={h} x="160" y="20" rx={radius} />
        <rect width={w} height={h} x="180" y="20" rx={radius} />
        <rect width={w} height={h} y="40" rx={radius} />
        <rect width={w} height={h} x="60" y="40" rx={radius} />
        <rect width={w} height={h} x="120" y="40" rx={radius} />
        <rect width={w} height={h} x="20" y="40" rx={radius} />
        <rect width={w} height={h} x="80" y="40" rx={radius} />
        <rect width={w} height={h} x="140" y="40" rx={radius} />
        <rect width={w} height={h} x="40" y="40" rx={radius} />
        <rect width={w} height={h} x="100" y="40" rx={radius} />
        <rect width={w} height={h} x="160" y="40" rx={radius} />
        <rect width={w} height={h} x="180" y="40" rx={radius} />
        <rect width={w} height={h} y="60" rx={radius} />
        <rect width={w} height={h} x="60" y="60" rx={radius} />
        <rect width={w} height={h} x="120" y="60" rx={radius} />
        <rect width={w} height={h} x="20" y="60" rx={radius} />
        <rect width={w} height={h} x="80" y="60" rx={radius} />
        <rect width={w} height={h} x="140" y="60" rx={radius} />
        <rect width={w} height={h} x="40" y="60" rx={radius} />
        <rect width={w} height={h} x="100" y="60" rx={radius} />
        <rect width={w} height={h} x="160" y="60" rx={radius} />
        <rect width={w} height={h} x="180" y="60" rx={radius} />
        <rect width={w} height={h} y="80" rx={radius} />
        <rect width={w} height={h} x="60" y="80" rx={radius} />
        <rect width={w} height={h} x="120" y="80" rx={radius} />
        <rect width={w} height={h} x="20" y="80" rx={radius} />
        <rect width={w} height={h} x="80" y="80" rx={radius} />
        <rect width={w} height={h} x="140" y="80" rx={radius} />
        <rect width={w} height={h} x="40" y="80" rx={radius} />
        <rect width={w} height={h} x="100" y="80" rx={radius} />
        <rect width={w} height={h} x="160" y="80" rx={radius} />
        <rect width={w} height={h} x="180" y="80" rx={radius} />
        <rect width={w} height={h} y="100" rx={radius} />
        <rect width={w} height={h} x="60" y="100" rx={radius} />
        <rect width={w} height={h} x="120" y="100" rx={radius} />
        <rect width={w} height={h} x="20" y="100" rx={radius} />
        <rect width={w} height={h} x="80" y="100" rx={radius} />
        <rect width={w} height={h} x="140" y="100" rx={radius} />
        <rect width={w} height={h} x="40" y="100" rx={radius} />
        <rect width={w} height={h} x="100" y="100" rx={radius} />
        <rect width={w} height={h} x="160" y="100" rx={radius} />
        <rect width={w} height={h} x="180" y="100" rx={radius} />
        <rect width={w} height={h} y="120" rx={radius} />
        <rect width={w} height={h} x="60" y="120" rx={radius} />
        <rect width={w} height={h} x="120" y="120" rx={radius} />
        <rect width={w} height={h} x="20" y="120" rx={radius} />
        <rect width={w} height={h} x="80" y="120" rx={radius} />
        <rect width={w} height={h} x="140" y="120" rx={radius} />
        <rect width={w} height={h} x="40" y="120" rx={radius} />
        <rect width={w} height={h} x="100" y="120" rx={radius} />
        <rect width={w} height={h} x="160" y="120" rx={radius} />
        <rect width={w} height={h} x="180" y="120" rx={radius} />
        <rect width={w} height={h} y="140" rx={radius} />
        <rect width={w} height={h} x="60" y="140" rx={radius} />
        <rect width={w} height={h} x="120" y="140" rx={radius} />
        <rect width={w} height={h} x="20" y="140" rx={radius} />
        <rect width={w} height={h} x="80" y="140" rx={radius} />
        <rect width={w} height={h} x="140" y="140" rx={radius} />
        <rect width={w} height={h} x="40" y="140" rx={radius} />
        <rect width={w} height={h} x="100" y="140" rx={radius} />
        <rect width={w} height={h} x="160" y="140" rx={radius} />
        <rect width={w} height={h} x="180" y="140" rx={radius} />
        <rect width={w} height={h} y="160" rx={radius} />
        <rect width={w} height={h} x="60" y="160" rx={radius} />
        <rect width={w} height={h} x="120" y="160" rx={radius} />
        <rect width={w} height={h} x="20" y="160" rx={radius} />
        <rect width={w} height={h} x="80" y="160" rx={radius} />
        <rect width={w} height={h} x="140" y="160" rx={radius} />
        <rect width={w} height={h} x="40" y="160" rx={radius} />
        <rect width={w} height={h} x="100" y="160" rx={radius} />
        <rect width={w} height={h} x="160" y="160" rx={radius} />
        <rect width={w} height={h} x="180" y="160" rx={radius} />
        <rect width={w} height={h} y="180" rx={radius} />
        <rect width={w} height={h} x="60" y="180" rx={radius} />
        <rect width={w} height={h} x="120" y="180" rx={radius} />
        <rect width={w} height={h} x="20" y="180" rx={radius} />
        <rect width={w} height={h} x="80" y="180" rx={radius} />
        <rect width={w} height={h} x="140" y="180" rx={radius} />
        <rect width={w} height={h} x="40" y="180" rx={radius} />
        <rect width={w} height={h} x="100" y="180" rx={radius} />
        <rect width={w} height={h} x="160" y="180" rx={radius} />
        <rect width={w} height={h} x="180" y="180" rx={radius} />
      </svg>
    );
  }