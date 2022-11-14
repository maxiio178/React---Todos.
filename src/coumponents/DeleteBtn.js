export const DeleteBtn = ({ handleDelete }) => {
  return (
    <div className="card-footer">
      <button onClick={handleDelete} className="btn btn-danger btn-sm">
        Delite
      </button>
    </div>
  );
};
