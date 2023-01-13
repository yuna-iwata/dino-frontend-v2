const baseUrlUsers = "https://13.40.219.208:5000/";

export async function submitUser(username, password) {
  try {
    const response = await fetch(`${baseUrlUsers}create-account`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    });
    const json = await response.json();
    return json;
  } catch (e) {
    console.log(e.message);
  }
}

export async function checkUser(username, password) {
  try {
    const response = await fetch(`${baseUrlUsers}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    });
    return await response.json();
  } catch (e) {
    console.log(e.message);
  }
}
