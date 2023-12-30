import PropTypes from 'prop-types'
import './Modal.scss'
const Modal = ({img, title, description, ingredients, handleModal}) => {
	return (
		<div role='modal' className='modal' onClick={handleModal}>
			<div role='item' className='modal__item'>
				<figure className='modal__imgContainer'>
					<img loading='lazy' src={img} className='modal__img'/>
				</figure>
                <article className='modal__info'>
                    <h2 className='text--title'>{title}</h2>
                    <p>{description}</p>
                    <ul className='modal__infoItemList'>
                        {ingredients && ingredients.map((item, index) => (
                            <li className='modal__infoList' key={index}>{item}</li>
                        ))}
                    </ul>
                </article>
			</div>
		</div>
	);
};
Modal.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    handleModal:PropTypes.func,
    description: PropTypes.string,
    ingredients: PropTypes.array,
}

export default Modal;
