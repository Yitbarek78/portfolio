function Avatar() {
  return (
    <svg
      viewBox="0 0 300 340"
      className="w-full"
      role="img"
      aria-label="Illustration of Yitbarek, a frontend developer, behind a laptop"
    >
      <defs>
        <pattern
          id="plaid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <rect width="40" height="40" fill="#dfe0ea" />
          <rect width="20" height="40" fill="#2b2d3a" opacity="0.85" />
          <rect width="40" height="20" fill="#3b3e52" opacity="0.7" />
          <rect
            x="20"
            y="20"
            width="20"
            height="20"
            fill="#14151c"
            opacity="0.6"
          />
        </pattern>
      </defs>

      {/* ground shadow */}
      <ellipse cx="150" cy="330" rx="130" ry="10" fill="#000" opacity=".25" />

      {/* shoulders: plaid shirt */}
      <path
        d="M40 330 C45 260 90 240 150 240 C210 240 255 260 260 330Z"
        fill="url(#plaid)"
      />

      {/* neck and V-neck skin */}
      <path d="M126 190 L126 240 Q150 256 174 240 L174 190Z" fill="#9c6240" />
      <path d="M126 236 L150 268 L174 236Z" fill="#9c6240" />

      {/* collar */}
      <path
        d="M126 236 L150 270 L128 280 L100 250Z"
        fill="#eceef5"
        stroke="#2b2d3a"
        strokeWidth="2"
      />
      <path
        d="M174 236 L150 270 L172 280 L200 250Z"
        fill="#eceef5"
        stroke="#2b2d3a"
        strokeWidth="2"
      />

      {/* necklace */}
      <path
        d="M132 230 Q150 262 168 230"
        fill="none"
        stroke="#1e1a18"
        strokeWidth="1.5"
      />

      {/* ears */}
      <ellipse cx="103" cy="148" rx="8" ry="14" fill="#b9794f" />
      <ellipse cx="197" cy="148" rx="8" ry="14" fill="#b9794f" />

      {/* face */}
      <ellipse cx="150" cy="142" rx="48" ry="58" fill="#b9794f" />

      {/* jaw stubble */}
      <path
        d="M104 150 Q110 190 150 204 Q190 190 196 150 Q186 186 150 196 Q114 186 104 150Z"
        fill="#2a211c"
        opacity="0.35"
      />

      {/* hair: base + curly bumps */}
      <path
        d="M102 128 C100 84 124 70 150 70 C176 70 200 84 198 128 C190 108 172 100 150 100 C128 100 110 108 102 128Z"
        fill="#1e1a18"
      />
      <g fill="#1e1a18">
        <circle cx="118" cy="92" r="12" />
        <circle cx="138" cy="80" r="12" />
        <circle cx="162" cy="80" r="12" />
        <circle cx="182" cy="92" r="12" />
        <circle cx="106" cy="112" r="10" />
        <circle cx="194" cy="112" r="10" />
      </g>

      {/* eyebrows */}
      <path
        d="M122 126 Q132 120 142 125"
        fill="none"
        stroke="#1e1a18"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M158 125 Q168 120 178 126"
        fill="none"
        stroke="#1e1a18"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* eyes */}
      <ellipse cx="132" cy="138" rx="7" ry="4.5" fill="#fff" />
      <ellipse cx="168" cy="138" rx="7" ry="4.5" fill="#fff" />
      <circle cx="132" cy="138" r="3.5" fill="#1e1a18" />
      <circle cx="168" cy="138" r="3.5" fill="#1e1a18" />

      {/* nose */}
      <path
        d="M150 142 L146 164 Q150 168 154 164"
        fill="none"
        stroke="#8a5434"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* lips, mustache, goatee */}
      <ellipse cx="150" cy="182" rx="10" ry="3.5" fill="#b5645a" />
      <path d="M132 174 Q150 166 168 174 Q150 178 132 174Z" fill="#2a211c" />
      <path
        d="M136 190 Q150 196 164 190 L162 202 Q150 210 138 202Z"
        fill="#2a211c"
      />

      {/* laptop */}
      <rect x="70" y="282" width="160" height="44" rx="6" fill="#b9bcc2" />
      <rect x="75" y="287" width="150" height="34" rx="3" fill="#a6a9af" />
      <text
        x="150"
        y="311"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="22"
        fontWeight="700"
        fill="#1f1f1f"
      >
        &lt;/&gt;
      </text>
    </svg>
  );
}

export default Avatar;
