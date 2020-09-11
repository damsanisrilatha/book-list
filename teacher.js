import { Student } from './student';
export class Teacher extends Student {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log('teach');
  }
}
