import PropTypes from 'prop-types'
import './Modal.scss'
const Modal = ({img, title, description, ingredients}) => {
	return (
		<div role='modal' className='modal'>
			<div role='item' className='modal__item'>
				<figure className='modal__imgContainer'>
					<img src={img} className='modal__img'/>
				</figure>
                <article className='modal__info'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <ul>
                        <li>{ingredients}</li>
                    </ul>
                </article>
			</div>
		</div>
	);
};
Modal.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    ingredients: PropTypes.string
}

export default Modal;
