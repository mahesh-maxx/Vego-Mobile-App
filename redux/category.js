import axios from 'axios'

const FETCH_CATEGORY_REQUEST = 'FETCH_CATEGORY_REQUEST'
const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS'
const FETCH_CATEGORY_ERROR = 'FETCH_CATEGORY_ERROR'

const initialstate = {
  loading: false,
  category: [],
  error: ''
}

export const fetchCategoryRequest = () => {
  return {
    type: FETCH_CATEGORY_REQUEST
  }
}

export const fetchCategorySuccess = (category) => {
  return {
    type: FETCH_CATEGORY_SUCCESS,
    payload: category
  }
}

export const fetchCategoryError = (err) => {
  return {
    type: FETCH_CATEGORY_ERROR,
    payload: err
  }
}

export const fetchCategories = () => {
  return (dispatch) => {
    dispatch(fetchCategoryRequest)
    axios
      .get('url')
      .then((response) => {
        const categories = response.data;
        dispatch(fetchCategorySuccess(categories))
      })
      .catch((err) => {
        dispatch(fetchCategoryError(err))
      })
  }
}

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.payload
      }
    case FETCH_CATEGORY_ERROR:
      return {
        ...state,
        category: [],
        error: action.payload
      }
    default:
      return state
  }
}
