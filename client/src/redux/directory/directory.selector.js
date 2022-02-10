import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectStatus = createSelector(
	selectDirectory,
	directoryData => directoryData.status
);

export const selectSections = createSelector(
	selectDirectory,
	directory => directory.sections
);
