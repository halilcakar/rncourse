import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../types';

const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          name: action.payload,
          image: {
            uri: 'https://s3-ap-southeast-1.amazonaws.com/storage.propsocial.com/property/pictures/3098715/laman_view-cyberjaya-propsocial-2_EYAh-cSstEyUUC1jPc2d_large.jpg'
          }
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.find(place => { return place.key !== state.selectedPlace.key; }),
        selectedPlace: null
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.key === action.payload;
        })
      };
    case DESELECT_PLACE:
      return { 
        ...state,
        selectedPlace: null
      };
    default: 
      return state;
  }
};

export default reducer;
