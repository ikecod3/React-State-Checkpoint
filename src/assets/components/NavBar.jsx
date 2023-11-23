import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
const NavBar = () => {
  return (
    <div>
      <Navbar>
        <Navbar.Brand
          href="#home"
          className="mx-auto d-flex align-items-center gap-2"
        >
          <img
            alt="Chekpoint logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTQTpxbRPhcSYYe6erG9owPSWKJkYjSFu8X65PUK0S-SJOBYEkaPU_x1yJt44T9ehLpLU&usqp=CAU"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
          <h2>React State Checkpoint</h2>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default NavBar;
