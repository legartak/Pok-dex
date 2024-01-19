import React from "react";

function Pokeinfo({ data }) {
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <img src={data.sprites.other.dream_world.front_default} alt="" />
          <h1>
            {data.name[0].toUpperCase() + data.name.slice(1) + " #" + data.id}
          </h1>
          <tbody>
            <tr>
              <td>Type</td>
              <td>
                {data.types
                  .map(
                    (entry) =>
                      entry.type.name[0].toUpperCase() +
                      entry.type.name.slice(1)
                  )
                  .reduce((prev, current) => prev + " " + current, "")}
              </td>
            </tr>
            <tr>
              <td>Attack</td>
              <td>{data.stats[1].base_stat}</td>
            </tr>
            <tr>
              <td>Defense</td>
              <td>{data.stats[2].base_stat}</td>
            </tr>
            <tr>
              <td>HP</td>
              <td>{data.stats[0].base_stat}</td>
            </tr>
            <tr>
              <td>SP Attack</td>
              <td>{data.stats[3].base_stat}</td>
            </tr>
            <tr>
              <td>SP Defence</td>
              <td>{data.stats[4].base_stat}</td>
            </tr>
            <tr>
              <td>Speed</td>
              <td>{data.stats[5].base_stat}</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>{data.weight}</td>
            </tr>
            <tr>
              <td>Total moves</td>
              <td>{data.moves.length}</td>
            </tr>
          </tbody>
        </>
      )}
    </>
  );
}

export default Pokeinfo;
