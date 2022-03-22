const ADD_TO_CART = 'ADD_TO_CART'
const DELETE_FROM_CART = 'DELETE_FROM_CART'
const SUB_QUANTITY = 'SUB_QUANTITY'
const ADD_SHIPPING = 'ADD_SHIPPING'
const SUB_SHIPPING = 'SUB_SHIPPING'

export const addToCart = (id) => {
  return {
    type: 'ADD_TO_CART',
    id
  }
}

export const deleteFromCart = (id) => {
  return {
    type: 'DELETE_FROM_CART',
    id
  }
}

export const subtractQuantity = (id) => {
  return {
    type: 'SUB_QUANTITY',
    id
  }
}

export const addQuantity = (id) => {
  return {
    type: 'ADD_QUANTITY',
    id
  }
}

const initialstate = {
  items: [],
  addedItems: [],
  total: 0
}

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      addedItem = state.items.find(item => item.id === action.id)

      let existedItem = state.addedItems.find(item => action.id === item.id)
      if (existedItem) {
        const index = state.addedItems.indexOf(addedItem);
        if (index > -1) {
          let quantity = state.addedItems[index].quantity;
          quantity += 1;
          addedItem.quantity = quantity;
          state.addedItems.splice(index, 1);
          return {
            ...state,
            addedItems: [...state.addedItems, addedItem],
            total: state.total + addedItem.price
          }
        }
      }
      else {
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price;
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal
        }
      }
      break;

    case 'DELETE_FROM_CART':
      let itemToRemove = state.addedItems.find(item => item.id === action.id);
      let newItems = state.addedItems.filter(item => item.id != action.id);

      let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
      return {
        ...state,
        addedItems: newItems,
        total: newTotal
      }

    case 'SUB_QUANTITY':
      let addedItem = state.addedItems.find(item => item.id === action.id);
      if (addedItem.quantity === 1) {
        let newItems = state.addedItems.filter(item => item.id != action.id);
        let newTotal = state.total - addedItem.price;
        return {
          ...state,
          addedItems: newItems,
          total: newTotal
        }
      }
      else {
        const index = state.addedItems.indexOf(addedItem);
        if (index > -1) {
          let quantity = state.addedItems[index].quantity;
          quantity -= 1;
          addedItem.quantity = quantity;
          state.addedItems.splice(index, 1);
          return {
            ...state,
            addedItems: [...state.addedItems, addedItem],
            total: state.total - addedItem.price
          }
        }
      }

    case 'ADD_SHIPPING':
      return {
        ...state,
        total: state.total + 6
      }

    case 'SUB_SHIPPING':
      return {
        ...state,
        total: state.total - 6
      }

    default:
      return state
  }
}









