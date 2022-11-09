import './Header.css';

export default function Header() {
  return (
    <div className="header d-flex">
      <h3 className="pagename">
        <a href="#">PlanetDB</a>
      </h3>
      <ul className="d-flex">
        <li><a href="#">People</a></li>
        <li><a href="#">Planets</a></li>
        <li><a href="#">Starships</a></li>
      </ul>
    </div>
  );
}