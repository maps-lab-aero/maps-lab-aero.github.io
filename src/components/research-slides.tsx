import type { ReactNode, JSX } from "react";
import { cn } from "@/lib/utils";

function Frame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1400 700"
      className={cn("h-full w-full", className)}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function SlideGroup() {
  return (
    <Frame>
      <rect width="1400" height="700" fill="#0a1f44" />
      <rect x="0" y="0" width="16" height="700" fill="#d6e4f7" />
      <path
        d="M 80 420 C 280 280, 520 240, 780 360 S 1120 520, 1360 380"
        fill="none"
        stroke="#8fb0d9"
        strokeWidth="1.5"
        opacity="0.55"
      />
      <path
        d="M 80 480 C 340 340, 560 300, 840 420 S 1160 560, 1360 440"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        opacity="0.55"
      />
      <path
        d="M 220 360 C 420 250, 640 250, 980 360 C 640 470, 420 470, 220 360 Z"
        fill="#12305a"
        stroke="#d6e4f7"
        strokeWidth="2"
      />
      <text
        x="80"
        y="150"
        fill="#ffffff"
        fontFamily="Georgia, serif"
        fontSize="78"
        fontWeight="600"
      >
        MAPS Lab
      </text>
      <text
        x="80"
        y="198"
        fill="#c5d3e8"
        fontFamily="sans-serif"
        fontSize="20"
        letterSpacing="2"
      >
        AEROSPACE PROPULSION  ·  MULTIDISCIPLINARY DESIGN
      </text>
    </Frame>
  );
}

export function SlideFlow() {
  const paths = [
    "M40 120 C 280 80, 520 220, 820 160 S 1240 80, 1360 140",
    "M40 200 C 300 160, 540 300, 840 240 S 1220 180, 1360 230",
    "M40 280 C 260 250, 560 360, 860 300 S 1200 280, 1360 320",
    "M40 360 C 280 340, 540 420, 860 380 S 1180 400, 1360 410",
    "M40 440 C 300 460, 560 500, 860 470 S 1180 520, 1360 500",
    "M40 520 C 280 560, 540 540, 840 560 S 1180 580, 1360 570",
    "M40 600 C 300 620, 560 600, 860 630 S 1200 610, 1360 640",
  ];
  return (
    <Frame>
      <rect width="1400" height="700" fill="#0a1f44" />
      <path
        d="M 220 340 C 420 220, 620 220, 980 340 C 620 460, 420 460, 220 340 Z"
        fill="#12305a"
        stroke="#9ec0e6"
        strokeWidth="3"
      />
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke={i % 2 ? "#8ec5e8" : "#d6e4f7"}
          strokeWidth="2"
          opacity={0.85}
        />
      ))}
      <text x="70" y="64" fill="#ffffff" fontFamily="Georgia, serif" fontSize="32">
        High-fidelity flow
      </text>
    </Frame>
  );
}

export function SlideRotor() {
  const blades = [0, 60, 120, 180, 240, 300];
  return (
    <Frame>
      <rect width="1400" height="700" fill="#0a1f44" />
      <g transform="translate(700 350)">
        <circle r="210" fill="none" stroke="#3d5a86" strokeWidth="1" />
        <circle r="150" fill="none" stroke="#3d5a86" strokeWidth="1" />
        {blades.map((deg) => (
          <ellipse
            key={deg}
            cx="0"
            cy="-155"
            rx="28"
            ry="150"
            fill="#9eb6d4"
            transform={`rotate(${deg})`}
            opacity="0.9"
          />
        ))}
        <circle r="36" fill="#d6e4f7" />
        <circle r="18" fill="#0c2d6b" />
      </g>
      <text x="70" y="64" fill="#ffffff" fontFamily="Georgia, serif" fontSize="32">
        Rotor and propeller
      </text>
    </Frame>
  );
}

export function SlideHeat() {
  return (
    <Frame>
      <rect width="1400" height="700" fill="#0a1f44" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect
          key={i}
          x={180 + i * 170}
          y="180"
          width="120"
          height="340"
          rx="8"
          fill={i % 2 ? "#1a4a8c" : "#12305a"}
          opacity={0.9 - i * 0.06}
        />
      ))}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <path
          key={`w${i}`}
          d={`M80 ${140 + i * 55} C 400 ${100 + i * 55}, 800 ${180 + i * 55}, 1320 ${130 + i * 55}`}
          fill="none"
          stroke="#9ec0e6"
          strokeWidth="1.5"
          opacity="0.55"
        />
      ))}
      <text x="70" y="64" fill="#ffffff" fontFamily="Georgia, serif" fontSize="32">
        Thermal management
      </text>
    </Frame>
  );
}

export function SlideOpt() {
  const cells = [];
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 16; x++) {
      const v = (Math.sin(x * 0.5) + Math.cos(y * 0.7) + 2) / 4;
      cells.push({ x, y, v });
    }
  }
  return (
    <Frame>
      <rect width="1400" height="700" fill="#0a1f44" />
      {cells.map((c, i) => (
        <rect
          key={i}
          x={80 + c.x * 78}
          y={110 + c.y * 68}
          width="74"
          height="64"
          fill={`rgb(${Math.round(12 + c.v * 40)}, ${Math.round(45 + c.v * 90)}, ${Math.round(107 + c.v * 80)})`}
          opacity="0.95"
        />
      ))}
      <path
        d="M 140 520 C 360 480, 520 240, 760 260 S 1100 420, 1280 180"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3"
      />
      <circle cx="1280" cy="180" r="10" fill="#ffffff" />
      <text x="70" y="64" fill="#ffffff" fontFamily="Georgia, serif" fontSize="32">
        Design optimization
      </text>
    </Frame>
  );
}

export function SlideAi() {
  const nodes = [
    [200, 180],
    [200, 350],
    [200, 520],
    [520, 140],
    [520, 280],
    [520, 420],
    [520, 560],
    [860, 220],
    [860, 380],
    [860, 540],
    [1180, 350],
  ];
  const edges: [number, number][] = [
    [0, 3],
    [0, 4],
    [1, 3],
    [1, 4],
    [1, 5],
    [2, 5],
    [2, 6],
    [3, 7],
    [4, 7],
    [4, 8],
    [5, 8],
    [5, 9],
    [6, 9],
    [7, 10],
    [8, 10],
    [9, 10],
  ];
  return (
    <Frame>
      <rect width="1400" height="700" fill="#0a1f44" />
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="#8fb0d9"
          strokeWidth="1.5"
          opacity="0.55"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i === 10 ? 22 : 16}
          fill={i === 10 ? "#d6e4f7" : "#9eb6d4"}
        />
      ))}
      <text x="70" y="64" fill="#ffffff" fontFamily="Georgia, serif" fontSize="32">
        Scientific AI
      </text>
    </Frame>
  );
}

export const slideArt: Record<string, () => JSX.Element> = {
  group: SlideGroup,
  flow: SlideFlow,
  rotor: SlideRotor,
  heat: SlideHeat,
  opt: SlideOpt,
  ai: SlideAi,
};
