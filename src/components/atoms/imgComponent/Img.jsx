import PropTypes from 'prop-types'

const Img = ({img, className}) => {

    const pathImg = `assets/img/${img}.png`;

  return ( <img src={pathImg} alt={img} className={className}/>)

}
Img.propTypes = {
    img: PropTypes.string,
    className: PropTypes.string
}
export default Img