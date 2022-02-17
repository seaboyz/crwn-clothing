import React from 'react';
import { useSelector } from 'react-redux';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import {
	selectSections,
	selectStatus
} from '../../redux/directory/directory.selector.js';
import { fetchDirectory } from '../../redux/directory/directory.slice.js';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Spinner } from '../with-spinner/with-spiner.component';
import { sortBy } from 'ramda';

const Directory = () => {
	const sections = useSelector(selectSections);
	const sortByEitherHasLargrProp = sortBy(section => {
		if (section.size === 'large') return 1;
		return -1;
	});
	const sortedSections = sortByEitherHasLargrProp(sections);
	const status = useSelector(selectStatus);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchDirectory());
	}, [dispatch]);

	return status === 'loading' || status === 'idle' ? (
		<Spinner />
	) : (
		<div className='directory-menu'>
			{sortedSections.map(({ id, ...props }) => (
				<MenuItem key={id} {...props} />
			))}
		</div>
	);
};

export default Directory;
