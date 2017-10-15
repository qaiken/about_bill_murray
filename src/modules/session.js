import {prepend} from 'ramda'

export const UPDATE_ROUTE = 'UPDATE_ROUTE'

const initialState = {
  routeHistory: []
}

export default (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_ROUTE:
      return {
        ...state,
        routeHistory: prepend(action.payload)(state.routeHistory)
      }

    default:
      return state
  }
}

export const updateRoute = route => dispatch => dispatch({
  type: UPDATE_ROUTE,
  payload: route
})
