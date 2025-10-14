
function Tag({ job}) {
  return (
      <span className="tag px-3 py-2 d-inline-flex align-items-center gap-2 border rounded-pill bg-light">
        {job}
        <button className="btn btn-sm p-0">
          <i className="bi bi-search"></i>
        </button>
      </span>
  );
}

export default Tag;
