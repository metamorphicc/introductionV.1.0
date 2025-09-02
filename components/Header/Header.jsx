// import "./header.css";
import Button from "../Button";
import "./header.css"

 const Header = () => {
  return (
    <>
      <header className="header">
        <div className="divHeader">
            <img src="../public/SVG/logo2.svg" alt="" width="140px" id="logo" style={{
              borderRadius:'50%',
              marginLeft: '60px',
              marginTop: '10px',
              
            }}/>
        </div>
        <div className="divHeader">
            <ul className="headerUl">
                <li><a href="#!">Contact me</a></li>
                <li><a href="#!">Projects</a></li>
                <li><a href="#!">All links</a></li>
                <li><a href="#!">Experience</a></li>
                <li><a href="#!">Portfolio</a></li>
            </ul>
        </div>
      </header>
    </>
  );
};

export default Header
