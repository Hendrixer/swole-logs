import {Observable} from 'data/observable';
import users from '../../shared/users';
import {topmost} from 'ui/frame';
/** Landing page class **/
export default class extends Observable {
  constructor() {
    super();
    this.set('username', '');
    this.set('password', '');
  }
  success() {
    topmost()
    .navigate({
      animated: true,
      moduleName: 'components/dailyWorkout/dailyWorkout'
    });
  }
  
  signUp() {
    users.register(
      this.get('username'),
      this.get('password')
    )
    .then(data => this.success());
  }
}
