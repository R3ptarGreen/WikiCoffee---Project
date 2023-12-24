import { useNavigate } from "react-router-dom";
import './HeroItem.scss';
import {Icon} from '../../'
const HeroItem = () => {
  const navigate = useNavigate()
  const handleNavigate = (type) => {
	navigate(`products/${type}`);
}
	return (
	    <div className="hero__heroItem heroItem">
      <div>
        <h1 className="text--homeTitle">WikiCoffee</h1>
        <p className="text--subtitle">content</p>
      </div>
      <div>
        <h2>How do you prefer your coffee ?</h2>
        <div className="hero__heroItemButtons">
          {['hot', 'cold'].map((type) => (
            <button
              key={type}
              className="hero__heroItemButton"
              onClick={() => handleNavigate(type)}
              role={type}
            >
              <Icon icon={type} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroItem;
