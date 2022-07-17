import './App.css';
import User from './components/User';
import user from './data/data';

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
