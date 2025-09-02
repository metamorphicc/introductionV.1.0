import "./navButton.css";

const NavButton = ({ children, onClick, style }) => {
  return (
    <button className="buttonArrow" onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default NavButton;
