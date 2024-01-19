import React from "react";

function Card({ pokemon, loading, infoPokemon }) {
  console.log(pokemon);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <div
              className="card"
              key={item.id}
              onClick={() => infoPokemon(item)}
            >
              <img src={item.sprites.front_default} alt="" />
              <h2>{item.name[0].toUpperCase() + item.name.slice(1)}</h2>
              <div className="types">
                {item.types.map((entry) => {
                  return (
                    <div className={"group " + entry.type.name}>
                      {entry.type.name}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })
      )}
    </>
  );
}

export default Card;
