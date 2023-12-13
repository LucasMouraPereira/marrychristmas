export const RadialGradients = () => (
  <defs>
    <radialGradient
      id="grad"
      cx="3"
      cy="3"
      r="6"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="red" />
      <stop offset="0.4" stopColor="#334673" />
      <stop offset="0.6" stopColor="#EDDDC4" />
      <stop offset="0.9" stopColor="#FEE8C7" />
      <stop offset="1" stopColor="red" />
    </radialGradient>
    <radialGradient
      id="dotGrad"
      cx="0"
      cy="0"
      r="50"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#FFFFFF" stopOpacity="1" />
      <stop offset="0.1" stopColor=":#0867C7" stopOpacity="0.6" />
      <stop offset="1" stopColor="#081029" stopOpacity="0" />
    </radialGradient>
  </defs>
)
