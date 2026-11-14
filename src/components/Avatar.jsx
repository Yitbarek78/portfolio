function Avatar() {
  return (
    <svg
      viewBox="0 0 300 340"
      className="w-full"
      role="img"
      aria-label="Illustration of a developer behind a laptop"
    >
      <ellipse cx="150" cy="330" rx="130" ry="10" fill="#000" opacity=".25" />
      <path
        d="M40 330 C45 260 90 240 150 240 C210 240 255 260 260 330Z"
        fill="#d9d9de"
      />
      <path
        d="M95 140 C80 60 120 30 150 30 C190 30 225 70 205 150 L205 230 L95 230Z"
        fill="#5a3825"
      />
      <circle cx="150" cy="150" r="58" fill="#e9b48a" />
      <path
        d="M95 135 C110 80 190 80 205 135 C190 110 110 110 95 135Z"
        fill="#5a3825"
      />
      <circle
        cx="128"
        cy="152"
        r="18"
        fill="none"
        stroke="#333"
        strokeWidth="3"
      />
      <circle
        cx="172"
        cy="152"
        r="18"
        fill="none"
        stroke="#333"
        strokeWidth="3"
      />
      <path d="M146 152h8" stroke="#333" strokeWidth="3" />
      <circle cx="128" cy="152" r="6" fill="#2b1d14" />
      <circle cx="172" cy="152" r="6" fill="#2b1d14" />
      <rect x="60" y="205" width="180" height="115" rx="8" fill="#b9bcc2" />
      <rect x="66" y="211" width="168" height="103" rx="4" fill="#a6a9af" />
      <text
        x="150"
        y="272"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="30"
        fontWeight="700"
        fill="#1f1f1f"
      >
        &lt;/&gt;
      </text>
    </svg>
  );
}

export default Avatar;
