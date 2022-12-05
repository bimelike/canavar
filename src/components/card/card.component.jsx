import "./card.styles.css";
const Card = ({ canavar }) => (
  <div className="card-container" key={canavar.id}>
    <img
      src={`https://robohash.org/${canavar.id}?set=set2&size=180x180`}
      alt={`canavar ${canavar.name}`}
    />
    <h2>{canavar.name}</h2>
    <p>{canavar.email}</p>
  </div>
);

export default Card;
