import PropTypes from 'prop-types';

const Icon = ({ icon, linkWeb, role }) => {
	const pathIcon = `assets/svg/${icon}.svg`;
	return (
		<a href={linkWeb} className='item'>
			<img src={pathIcon} alt={icon} role={role}/>
		</a>
	);
};
Icon.propTypes = {
	role:PropTypes.string,
	icon: PropTypes.string,
	linkWeb: PropTypes.string,
};
export default Icon;
