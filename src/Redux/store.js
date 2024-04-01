import { legacy_createStore } from "redux";
// import { coreducer } from "./reducer";
import { coreducer } from "./counter/reducer";

export const store = legacy_createStore(coreducer, { count: 0 });