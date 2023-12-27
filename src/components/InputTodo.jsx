const style = {
  backgroundColor: "#c6e5d9",
  height: "36px",
  width: "400px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
};

export const InputTodo = ({ todoText, onChange, onClick, disabled }) => {
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
