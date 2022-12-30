import { nanoid } from "nanoid";
import capitalize from "./Util";

export default function Description(props) {
  const types =
    props.types &&
    props.types.map((type) => (
      <p key={nanoid()} className="p1">
        {capitalize(type.type.name)}
      </p>
    ));
  const abilities =
    props.abilities &&
    props.abilities.map((ability, index) => (
      <p key={nanoid()} className="p1">
        {capitalize(ability.ability.name)}{" "}
      </p>
    ));
  const statName =
    props.stats &&
    props.stats.map((stat) => (
      <p key={nanoid()} className="p1">
        {capitalize(stat.stat.name)}
      </p>
    ));
  const statLevel =
    props.stats &&
    props.stats.map((stat) => (
      <p key={nanoid()} className="p1">
        {stat.base_stat}
      </p>
    ));
  const moves =
    props.moves &&
    props.moves.map((move) => <>{capitalize(move.move.name)}, </>);
  return (
    <div className="description">
      <div className="type">Type: {types}</div>
      <div className="ability">Abilities: {abilities}</div>
      <div className="stat">Stat Name: {statName}</div>
      <div className="stat-level">Stat Level: {statLevel}</div>
      <div className="moves">
        Moves: {moves && moves.length === 0 ? "Unknown" : moves}
      </div>
    </div>
  );
}
