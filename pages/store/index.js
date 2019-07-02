import { observable } from 'mobx';

export default class Store {
	@observable static session = null;
	@observable a = 0;
}
