/* eslint-disable react/prop-types */
const HistoryCard = ({ style, title, value }) => {
  let classes = style.join(" ");
  return (
    <div className={classes}>
      <span>{title}</span>
      <span>{value}</span>
    </div>
  );
};

export default HistoryCard;
