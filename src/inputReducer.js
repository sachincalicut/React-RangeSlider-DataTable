import { ACTIONS } from "./actions";
import { filterFunc } from "./filterFunc";

export const InputReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATEA:
      state.currentMinVal = parseInt(action.payload.value);

      state.json = filterFunc(
        state.jsonCopy,
        state.currentMinVal,
        state.currentMaxVal,
        "Price"
      );

      if (state.currentMinVal > state.currentMaxVal) {
        state.currentMaxVal = parseInt(action.payload.value);
      }

      if (state.json.length < 1) {
        state.json = [{}];
      }

      return { ...state };

    case ACTIONS.UPDATEB:
      state.currentMaxVal = parseInt(action.payload.value);
      state.json = filterFunc(
        state.jsonCopy,
        state.currentMinVal,
        state.currentMaxVal,
        "Price"
      );
      state.options.searchable = false;
      if (state.currentMinVal > state.currentMaxVal) {
        state.currentMinVal = parseInt(action.payload.value);
      }
      if (state.json.length < 1) {
        state.json = [{ "": "" }];
      }
      return { ...state };

    default:
      return state;
  }
};
