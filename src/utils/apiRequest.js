const API_URL = "http://localhost:8000/api";

export const getUserMealDetails = async (id) => {
  try {
    const res = await fetch(`${API_URL}/meal?id=${id}`);
    if (!res.ok) throw Error(`Couldn't find order #${id}`);

    const { data } = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const mealOnOff = async (payload) => {
  try {
    const res = await fetch(`${API_URL}/meal/update`, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
