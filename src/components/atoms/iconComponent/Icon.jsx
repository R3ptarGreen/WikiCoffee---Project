import PropTypes from 'prop-types';

const Icon = ({ icon, linkWeb, role, onClick }) => {
	const pathIcon = `assets/svg/${icon}.svg`;
	return (
		<a href={linkWeb} className='item' onClick={onClick}>
			<img src={pathIcon} alt={icon} role={role}/>
		</a>
	);
};
Icon.propTypes = {
	role:PropTypes.string,
	icon: PropTypes.string,
	onClick:PropTypes.func,
	linkWeb: PropTypes.string,
};
export default Icon;
