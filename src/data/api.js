const getPokemones = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/pokemones", {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw error;
  }
};

export { getPokemones };
