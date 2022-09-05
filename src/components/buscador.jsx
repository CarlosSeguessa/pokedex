function Buscador({ pokemonesActuales, setPokemonesActuales, pokemones }) {

    const filtrarPokemon = (e) => {
        if (e.target.value !== "") {
            const listaFiltrada = [...pokemonesActuales].filter(pokemon => { return pokemon.name.toLowerCase().includes(e.target.value.toLowerCase()) })
            setPokemonesActuales(listaFiltrada)
        } else {
            setPokemonesActuales(pokemones)
        }
    }
    return (
        <div>
            <input className="w-full text-center mt-8 px-4 py-2 h-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-gray-500"
                type="text"
                placeholder="🔎 Buscar"
                onChange={filtrarPokemon}></input>

            {/*    
            para ver los nombre
            {...Pokemones.filter((val) => {
                if (filterList == "") {
                    return val
                } else if (val.name.toLowerCase().includes(filterList.toLowerCase())) {
                    return val;
                }
            }).map((val, key) => {
                return (
                    <div className="user" key={key}>
                        <p>{val.name}
                        </p>
                    </div>
                );
            })}*/}
        </div>
    )

};
export default Buscador;

/* return(
    <div className='app'>
        <div>
            search: <input name='query' type='text' onChange={handleInputChange}/>
        </div>
        {filterList && filterList.map((item,i) => <div key={i}>{item}</div>)}
        </div>
)*/

/*const handleInputChange = (e) => {
      if (e.target.value === "")
          SetfilterList(pokemones);
      return;
  };*/
/*const filteredList = pokemones.filter(
    (item) => item.name.toLowerCase().indexOf(e.target.value()) !== -1
);*/
/*SetfilterList(filteredList);*/