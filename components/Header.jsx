// import "./header.css";
import Button from "./Button";

 const Header = () => {
  return (
    <>
      <header className="header">
        <div>
            <img src="../public/morph.png" alt="" width="100px"/>
        </div>
        <div>
            <ul>
                <li><Button props=""/></li>
                <li></li>
                <li></li>
            </ul>
        </div>
      </header>
    </>
  );
};

export default Header
