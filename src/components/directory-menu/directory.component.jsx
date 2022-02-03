import React from 'react';
import { useSelector } from 'react-redux';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import { selectSections } from '../../redux/directory/directory.selector.js';

const Directory = () => {
	const sections = useSelector(selectSections);
	return (
		<div className='directory-menu'>
			{sections.map(({ id, ...props }) => (
				<MenuItem key={id} {...props} />
			))}
		</div>
	);
};

export default Directory;
