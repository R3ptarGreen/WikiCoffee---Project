import './Hero.scss';
import { AllProductsButton, HeroItem, Img } from '../../index';
const Hero = () => {
	return (
		<div role='hero' className='hero'>
			<Img img={'bgDesign'} className={'bgDesign'} />
			<div className='hero__allProductsContainer'>
				<AllProductsButton />
			</div>
			<div className='hero__heroItemContainer'>
				<Img img={'heroImg'} className={'hero__img'} />
				<HeroItem />
			</div>
		</div>
	);
};

export default Hero;
