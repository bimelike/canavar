import Card from "../card/card.component";

import "./card-list.styles.css";
const CardList = ({ canavarlar }) => (
  // const { canavarlar } = props;
  <div className="card-list">
    {canavarlar.map((canavar) => {
      // const { name, email, id } = canavar
      return <Card canavar={canavar} key={canavar.id} />;
    })}
  </div>
);

export default CardList;
