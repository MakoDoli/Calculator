interface Props {
  theme: number;
  setTheme: (theme: number) => void;
}
const Header = ({ theme, setTheme }: Props) => {
  const changeTheme = () => {
    if (theme === 1) setTheme(2);
    if (theme === 2) setTheme(3);
    if (theme === 3) setTheme(1);
  };
  return (
    <header className={`header-${theme}`}>
      <h1 className="logo">calc</h1>
      <div className="theme-cont">
        <p className="theme-title">THEME</p>
        <div className="theme">
          <div className="switch-numbers">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <div onClick={changeTheme} className={`switch-${theme}`}>
            <div className={`button-${theme}`}></div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
