import { createStore } from 'redux';
import generateSheet from '../reducers/generateSheet';

const store = createStore(generateSheet);

export default store;