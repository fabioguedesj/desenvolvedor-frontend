const Typography = ({ textBefore, textAfter, className }) => {
  const classes = `secondary-heading ${className}`;
  return (
    <h2 className={classes}>
      <span className='secondary-heading__before'>{textBefore}</span>
      <span className='secondary-heading__after'>{textAfter}</span>
    </h2>
  );
};

export default Typography;
