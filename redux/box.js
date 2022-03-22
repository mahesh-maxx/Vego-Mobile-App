import axios from 'axios'

const FETCH_BOX_REQUEST = 'FETCH_BOX_REQUEST'
const FETCH_BOX_SUCCESS = 'FETCH_BOX_SUCCESS'
const FETCH_BOX_ERROR = 'FETCH_BOX_ERROR'

const initialstate = {
  loading: false,
  box: [],
  error: ''
}

export const fetchBoxRequest = () => {
  return {
    type: FETCH_BOX_REQUEST
  }
}

export const fetchBoxSuccess = (box) => {
  return {
    type: FETCH_BOX_SUCCESS,
    payload: box
  }
}

export const fetchBoxError = (err) => {
  return {
    type: FETCH_BOX_ERROR,
    payload: err
  }
}

export const fetchBoxes = () => {
  return (dispatch) => {
    dispatch(fetchBoxRequest)
    axios
      .get('url')
      .then((response) => {
        const boxes = response.data;
        dispatch(fetchBoxSuccess(boxes))
      })
      .catch((err) => {
        dispatch(fetchBoxError(err))
      })
  }
}

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_BOX_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_BOX_SUCCESS:
      return {
        ...state,
        box: action.payload
      }
    case FETCH_BOX_ERROR:
      return {
        ...state,
        box: [],
        error: action.payload
      }
    default:
      return state
  }
}
