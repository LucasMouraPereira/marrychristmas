export const Filter = () => (
  <filter id="glow" x="-150%" y="-150%" width="280%" height="280%">
    <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />
    <feGaussianBlur in="offOut" stdDeviation="16" result="blur" />

    <feComponentTransfer>
      <feFuncR type="discrete" tableValues="0.8" />
      <feFuncG type="discrete" tableValues="0.3" />
      <feFuncB type="discrete" tableValues="0.2" />
      <feFuncA type="linear" slope="1" intercept="0" />
    </feComponentTransfer>

    <feComposite in="SourceGraphic" operator="over" />
  </filter>
)
