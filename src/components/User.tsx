import Wrapper from './Wrapper';
import { UserProps } from '../types';
import { SomethingButton } from './SomethingButton';

const User = ({ id, email, age, isMarried, role, skills, doSomething }: UserProps) => {
  return (
    <Wrapper>
      <p>Id: {id}</p>
      <p>Email: {email}</p>
      {age && <p>Age: {age}</p>}
      {isMarried && <p>Is Married: {isMarried}</p>}
      <p>Role: {role}</p>
      {skills && (
        <ul>
          {skills.map((skill) => (
            <li
              key={skill}
              style={{ listStyle: 'none', padding: '8px 0' }}
            >
              {skill}
            </li>
          ))}
        </ul>
      )}

      <SomethingButton doSomething={doSomething} />
    </Wrapper>
  );
};

export default User;
