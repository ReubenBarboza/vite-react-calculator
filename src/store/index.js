import { createSlice, configureStore } from "@reduxjs/toolkit";

const calculatorInitialState = {
  display: "",
};

const operators = ["+", "-", "*", "/"];

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: calculatorInitialState,
  reducers: {
    valueAdd(state, action) {
      if (
        action.payload.type === "action" ||
        action.payload.type === "operator"
      ) {
        return;
      }
      const checkIsInvalid = /(\.{2})|(\d*([+\-/*]\d?\.{2}))|(\.\d+\.)/g;
      // checkIsInvalid is true when the display is wrong for decimals. So to prevent wrong display add a decimal and check.
      const trialWithADecimal = state.display + ".";

      if (
        checkIsInvalid.test(trialWithADecimal) &&
        action.payload.name === "."
      ) {
        return;
      }
      state.display += action.payload.name;
    },

    clearDisplay(state, action) {
      if (action.payload.name === "AC" || action.payload === "didEquals") {
        state.display = "";
      }
    },
    changeSign(state, action) {
      if (action.payload.name === "+/-") {
        if (+state.display[0] > 0 || state.display[0] === ".") {
          state.display = "-" + state.display;
        } else if (
          state.display[0] === "-" ||
          (state.display[0] === "-" && state.display[0] === ".")
        ) {
          state.display = state.display.slice(1);
        }
      }
    },

    addOperator(state, action) {
      if (operators.includes(state.display.at(-1))) return;
      if (action.payload.name === "+" && state.display !== "") {
        state.display += "+";
      }
    },

    subtractOperator(state, action) {
      if (operators.includes(state.display.at(-1))) return;
      if (action.payload.name === "-" && state.display !== "") {
        state.display += "-";
      }
    },

    multiplyOperator(state, action) {
      if (operators.includes(state.display.at(-1))) return;
      if (action.payload.name === "*" && state.display !== "") {
        state.display += "*";
      }
    },
    divideOperator(state, action) {
      if (operators.includes(state.display.at(-1))) return;
      if (action.payload.name === "/" && state.display !== "") {
        state.display += "/";
      }
    },
    moduloOperator(state, action) {
      if (operators.includes(state.display.at(-1))) return;
      if (action.payload.name === "%" && state.display !== "") {
        state.display += "%";
      }
    },

    equals(state, action) {
      if (action.payload.name === "=") {
        const regex = /[0-9]/;
        const lastCharIsNumber = regex.test(state.display.at(-1));
        if (state.display.at(-1) === ".") {
          state.display += "0";
        }
        if (!lastCharIsNumber) {
          state.display = state.display.slice(0, state.display.length - 1);
        }
        let result = Function("return " + state.display)();

        state.display = result + "";
      }
    },
  },
});

const store = configureStore({
  reducer: {
    calculator: calculatorSlice.reducer,
  },
});

export const calculatorActions = calculatorSlice.actions;

export default store;
