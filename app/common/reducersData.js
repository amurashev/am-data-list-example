

export const getDefaultPagination = () => ({
	nextPage: null,
	onNextPage: null,
	totalCount: null
});

export const getDefaultList = ({index}) => ({
	[index]: [],
	isLoading: false,
	pagination: getDefaultPagination()
});