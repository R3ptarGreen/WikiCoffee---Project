import { useNavigate } from "react-router-dom";
import './HeroItem.scss';
const HeroItem = () => {
  const navigate = useNavigate()
  const handleNavigateHot = () => {
    navigate('products/hot')
  }
  const handleNavigateCold = () => {
    navigate('products/cold')
  }
	return (
		<div className="hero__heroItem">
			<div>
				<p>WikiCoffee</p>
				<p>content</p>
			</div>
			<div>
				<p>How do you prefer your coffee ?</p>
				<div >
					<button onClick={handleNavigateHot} role="hot" >hot</button>
					<button onClick={handleNavigateCold} role="cold" >cold</button>
				</div>
			</div>
		</div>
	);
};

export default HeroItem;
