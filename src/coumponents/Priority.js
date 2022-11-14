export const Priority = ({ tasks }) => {
  return (
    <div>
      <label className="form-label">Priority: {tasks.priority}</label>
      <input type="range" className="form-range" min="0" max="2"></input>
    </div>
  );
};
