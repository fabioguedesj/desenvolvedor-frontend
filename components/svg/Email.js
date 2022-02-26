const Email = ({ onHover, onExit, color, className }) => {
  return (
    <svg
      fill={color}
      id='Layer_1'
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 122.88 85.57'
      width='35px'
      height='35px'
      onMouseEnter={onHover}
      onMouseLeave={onExit}
      className={className}
      onClick={() => window.open('mailto:fabioaz.guedes@hotmail.com')}
      >
      <path d='M3.8,0,62.48,47.85,118.65,0ZM0,80.52,41.8,38.61,0,4.53v76ZM46.41,42.37,3.31,85.57h115.9L78,42.37,64.44,53.94h0a3,3,0,0,1-3.78.05L46.41,42.37Zm36.12-3.84,40.35,42.33V4.16L82.53,38.53Z' />
    </svg>
  );
};

export default Email;
