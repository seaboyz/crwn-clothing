import { useNavigate } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
	const navigate = useNavigate();
	return (
		<div onClick={() => navigate(linkUrl)} className={`${size} menu-item`}>
			<div
				className='backgroundl-image'
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className='content'>
				<h1 className='title'>{title}</h1>
				<span className='subtitle'>SHOP NOW</span>
			</div>
		</div>
	);
};

export default MenuItem;
