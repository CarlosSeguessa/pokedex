const getPokemones = async () => {
  try {
    const response = await fetch(
      "https://pokedex-back-production-18ab.up.railway.app/api/pokemones",
      {
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw error;
  }
};

export { getPokemones };
