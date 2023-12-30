import { useNavigate } from "react-router-dom";
import './HeroItem.scss';
import {Icon} from '../../'
import {useProductContext} from '../../../hooks/useProductContext'

const HeroItem = () => {
  
  const {setProductType} = useProductContext()

  const navigate = useNavigate()

  const handleNavigate = (homeType) => {
    navigate('/products');
    setProductType(homeType)
}
	return (
	    <div className="hero__heroItem heroItem">
      <div>
        <h1 className="text--homeTitle">WikiCoffee</h1>
        <p className="text--subtitle">Coffee is more than a beverage, however. It is a memory, an anticipation, a lifetime of consoling moments of modest pleasure woven into our lives.</p>
      </div>
      <div>
        <h2 className={"text--subtitle"} >How do you prefer your coffee ?</h2>
        <div className="hero__heroItemButtons">
          {['hot', 'iced'].map((homeType) => (
            <button
              key={homeType}
              className="hero__heroItemButton"
              onClick={() => handleNavigate(homeType)}
              role={homeType}
            >
              <Icon icon={homeType} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroItem;
