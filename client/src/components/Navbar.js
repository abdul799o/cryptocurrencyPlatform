import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div class="container">
        <Link to="/">
          <h1>CryptoIQ or whatever it was</h1>
        </Link>{" "}
      </div>
    </header>
  );
};

export default Navbar