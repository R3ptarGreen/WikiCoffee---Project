import PropTypes from 'prop-types';

const Icon = ({ icon, linkWeb }) => {
	const pathIcon = `assets/svg/${icon}.svg`;
	return (
		<a href={linkWeb} className='item'>
			<img src={pathIcon} alt={icon} />
		</a>
	);
};
Icon.propTypes = {
	icon: PropTypes.string,
	linkWeb: PropTypes.string,
};
export default Icon;
