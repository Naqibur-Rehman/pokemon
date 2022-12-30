import Pokeball from "../assets/pokeball.png";

export default function Header(props) {
  return (
    <div className="header">
      <div className="header-link">
        <img src={Pokeball} className="pokeball-logo" alt="pokeball" />
        <h2>Pokemon-Master</h2>
      </div>

      <div className="header-form">

      <form onSubmit={props.handleSubmit}>
        <input
          className="search"
          placeholder="Search-Pokemon"
          type="text"
          onChange={props.handleChange}
          value={props.value}
        />
        <button className="submit-button">Search</button>
      </form>
      </div>
    </div>
  );
}
