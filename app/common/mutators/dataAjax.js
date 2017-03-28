import { fromJS } from 'immutable';
import { getDefaultPagination } from '../reducersData';

export const dataGetRequest = ({index}) => (s) => s
	.withMutations(s => s
		.set(index, fromJS([]))
		.set('pagination', fromJS(getDefaultPagination()))
		.set('isLoading', true)
	);

export const dataGetResponseSuccess = ({index, data}) => (s) => s
	.withMutations(s => s
		.set(index, fromJS(data[index]))
		.set('pagination', fromJS(data.pagination))
		.set('isLoading', false)
	);

export const dataLoadMoreRequest = (params) => (s) => s
	.withMutations(s => s
		.setIn(['pagination', 'onNextPage'], null)
		.set('isLoading', true)
	);

export const dataLoadMoreResponseSuccess = ({index, data}) => (s) => s
	.withMutations(s => s
		.set(index, s.get(index).concat(fromJS(data[index])))
		.set('pagination', fromJS(data.pagination))
		.set('isLoading', false)
	);