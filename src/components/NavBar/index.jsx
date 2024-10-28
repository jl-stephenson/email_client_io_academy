import { Link } from "react-router-dom";

const NavBar = ({ status, showModal, handleMenuClick }) => {
  return (
    <div
      onClick={handleMenuClick}
      className={`border
       text-white 
       h-screen
        bg-cyan-600 
        md:p-4 
        p-8 
        sm:w-1/12 
        w-1/2 
        sm:static 
        absolute 
        z-10 
        ${status} 
        sm:block 
        sm:min-w-48`}
    >
      <h3
        onClick={showModal}
        className="sm:py-3 mb-6 sm:text-sm text-lg cursor-pointer"
      >
        New Email
      </h3>
      <h3 className="sm:py-3 mb-6 sm:text-sm text-lg">
        <Link to="/">
          Inbox
        </Link>
      </h3>
      <h3 className="sm:py-3 mb-6 sm:text-sm text-lg">
        <Link to="/sent">
          Sent
        </Link>
      </h3>
      <h3 className="sm:py-3 mb-6 sm:text-sm text-lg">
        <Link to="/deleted">
          Deleted
        </Link>
      </h3>
    </div>
  );
};

export default NavBar;
