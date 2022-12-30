import Description from "./Description";

export default function Pokemon(props) {
    return (
      <div className="pokemon-card">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.index}.png`}
          className="pokemon-img"
        />
        <h1 className="pokemon-name">
          {props.name && props.name.toUpperCase()}
        </h1>
        <p className="base-experience">
          {props.baseExperience === null
            ? " "
            : `Base Experience: ${props.baseExperience}`}
        </p>
        <div className="pokemon-specs">
          <p>Weight: {props.weight / 10} kg</p>
          <p>Height: {props.height / 10} m</p>
        </div>
        {props &&
          (props.showMore ? (
            <Description
              types={props.types}
              abilities={props.abilities}
              stats={props.stats}
              moves={props.moves}
            />
          ) : (
            ""
          ))}
        <button className="pokemon-button" onClick={props.handleClick}>
          {props.showMore ? "Show Less": "Show More"}
        </button>
      </div>
    );
}
