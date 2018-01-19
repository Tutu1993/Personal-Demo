import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import isFetching from 'reducerDir/isFetching.js'
import loader from 'reducerDir/loader.js'

const reducers = combineReducers({
	routerReducer,
	isFetching,
	loader,
})

export default reducers
