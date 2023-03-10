import CareScale from './CareScale'
import '../styles/PlantItem.css'



function PlantItem({ id, cover, name, water, light, price, categories }) {
	return (
		<li  className='lmj-plant-item'>
			<span className='lmj-plant-item-price'>{price}€</span>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			<div className='lmj-plant-item-name'>
            {name}
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem
