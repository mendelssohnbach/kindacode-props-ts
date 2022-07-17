import { WrapperProps } from '../types';

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div
      style={{
        backgroundColor: '#5e357c',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        padding: '50px',
        fontSize: 24,
        borderRadius: '16px',
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
