import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div
      className="sidebar d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ width: "200px"}}
    >
      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-7">theBoyNextDoor</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li 
        className="nav-item"
        onClick= {() => console.log("Home")}
        >
          <Link 
          to="/" 
          className="nav-link text-white" aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </Link>
        </li>
        <li 
        onClick={() => console.log("Create Post ")}
        >
          <Link to="/create-post" className="nav-link text-white ">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
