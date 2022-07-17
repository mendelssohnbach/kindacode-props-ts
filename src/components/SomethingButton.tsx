export const SomethingButton = ({ doSomething }: any) => {
  return (
    <div>
      <button
        type="button"
        onClick={doSomething}
        style={{ padding: '15px 40px' }}
      >
        Test something
      </button>
    </div>
  );
};
