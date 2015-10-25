import {Observable} from 'data/observable';

class HelloWorldModel extends Observable {
  private counter: number;
  constructor() {
    super();
    this.counter = 42;
    this.set('message', `${this.counter} taps left`);
  }

  tapAction() {
    this.counter--;
    if ( this.counter <= 0) {
      this.set('message', 'Hoorraaaaay1 You did it!');
    } else {
      this.set('message', `${this.counter} taps left`);
    }
  }
}
const mainViewModel = new HelloWorldModel();
export {HelloWorldModel, mainViewModel};
