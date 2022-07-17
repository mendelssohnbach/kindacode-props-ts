import { Role } from '../components/User';

const user = {
  id: 'u1',
  email: 'johon.doe@gmail.com',
  age: 100,
  isMarried: false,
  role: Role.member,
  skills: ['React', 'Node.js', 'PostgreSQL'],
  doSomething: () => {
    console.log(`Hello ${user.email}`);
  },
};

export default user;
