import './App.css';
import User, { Role } from './components/User';

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

function App() {
  return (
    <div>
      <User
        id={user.id}
        email={user.email}
        age={user.age}
        isMarried={user.isMarried}
        role={user.role}
        skills={user.skills}
        doSomething={user.doSomething}
      />
    </div>
  );
}

export default App;
