import { fromJS } from 'immutable';

import { pipe } from '../../../../utils/functions';
import { getDefaultList } from '../../../common/reducersData';
import * as mutate from '../mutators';

import {
	USERS_GET_REQUEST,
	USERS_GET_RESPONSE_SUCCESS,

	USERS_LOAD_MORE_REQUEST,
	USERS_LOAD_MORE_REQUEST_SUCCESS
} from '../constants';

const index = 'users';

const initialState = fromJS({
    ...getDefaultList({ index })
});

export default function usersListReducer(state = initialState, action) {
    
    switch(action.type) {

        case USERS_GET_REQUEST:
            return pipe([
                mutate.dataGetRequest({ index })
            ], state);

        case USERS_GET_RESPONSE_SUCCESS:
            return pipe([
                mutate.dataGetResponseSuccess({
                    index,
                    data: action.data
                })
            ], state);

        case USERS_LOAD_MORE_REQUEST:
            return pipe([
                mutate.dataLoadMoreRequest()
            ], state);

        case USERS_LOAD_MORE_REQUEST_SUCCESS:
            return pipe([
                mutate.dataLoadMoreResponseSuccess({
                    index,
                    data: action.data
                })
            ], state);

        default: return state;
    }
}

