/* eslint-disable react/prop-types */
const StatusCard = ({ type, card, color, amount }) => {
  return (
    <div className={card}>
      <h6>{type}</h6>
      <h4 className={color}>
        €<span>{amount}</span>
      </h4>
    </div>
  );
};

export default StatusCard;
