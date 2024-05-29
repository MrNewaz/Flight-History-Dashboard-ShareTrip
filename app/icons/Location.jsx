const Location = ({ color = "#9BA6B2" }) => (
  <svg width={24} height={24} fill="none">
    <ellipse cx={12} cy={20} fill={color} opacity={0.5} rx={4} ry={2} />
    <path
      fill={color}
      fillRule="evenodd"
      d="M12.004 2c3.71.018 6.746 3.145 6.746 7 0 2.184-.945 4.366-2.165 5.894L16.5 15l-3.947 4.705a.882.882 0 0 1-.118.123.75.75 0 0 1-.186.117l-.031.012-.033.012a.648.648 0 0 1-.503-.046.81.81 0 0 1-.259-.218L7.5 15l-.1-.124C6.183 13.35 5.25 11.184 5.25 9c0-3.866 3.022-7 6.754-7ZM12 11a2.813 2.813 0 1 0 0-5.625A2.813 2.813 0 0 0 12 11Z"
      clipRule="evenodd"
    />
  </svg>
)
export default Location
