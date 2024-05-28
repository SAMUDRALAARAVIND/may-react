// Shopping store
import { composeWithDevTools } from "redux-devtools-extension";
import { legacy_createStore as createStore } from "redux";

const products = [
  {
    id: 2930,
    name: "Britannia milk bread",
    price: 50,
    description: "500g",
    image: "bread.jpg",
  },
  {
    id: 2931,
    name: "Godrej jersey curd",
    price: 44,
    description: "400g",
    image: "curd.jpeg",
  },
  {
    id: 2932,
    name: "Amul fresh malai paneer",
    price: 89,
    description: "200g",
    image: "malai.jpeg",
  },
  {
    id: 2933,
    name: "Heritage daily milk",
    price: 30,
    description: "500ml",
    image: "milk.jpeg",
  },
];

const intialState = {
  products,
  cart: [],
  whishlist: {},
};

function reducer(state = intialState, action) {
  switch (action.type) {
    case "add_cart": {
      const productId = action.payload;
      let selectedProduct = null;

      return {
        ...state,
        products: state.products.filter((product) => {
          if (product.id === productId) {
            selectedProduct = product;
            selectedProduct.quantity = 1;
            return false;
          }
          return true;
        }),
        cart: [...state.cart, selectedProduct],
      };
      // get productId and move that object from the products to cart
    }
    case "inc_count": {
      return {
        ...state,
        cart: state.cart.map((p) => {
          if (p.id === action.payload) {
            p.quantity++;
          }
          return p;
        }),
      };
    }
    case "dec_count": {
      const intialProductsCount = state.products.length; // 3
      state.cart.forEach((product) => {
        if (product.id === action.payload) {
          product.quantity--;
          if (product.quantity === 0) {
            delete product.quantity;
            state.products.push(product);
          }
        }
      });
      // state.products,length = 4
      const add = intialProductsCount !== state.products.length;
      // if add is true update products else don't update
      return {
        ...state,
        ...(add && { products: [...state.products] }),
        cart: state.cart.filter((p) => Boolean(p.quantity)),
      };
    }
    default:
      return state;
  }
}

const store = createStore(reducer, composeWithDevTools());
export default store;
