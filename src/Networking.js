const baseUrl = "http://127.0.0.1:5000/";

export async function submitUser(username, password) {
  const response = await fetch(`${baseUrl}create-account`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
  });
  const json = await response.json();

  return json;
}

export async function checkUser(username, password) {
  try {
    const response = await fetch(`${baseUrl}login`, {
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

export async function deleteUser(username) {
  try {
    const response = await fetch(`${baseUrl}delete-account`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username }),
    });
    return await response.json();
  } catch (e) {
    console.log(e.message);
  }
}

export async function changePassword(username, oldPassword, newPassword) {
  try {
    const response = await fetch(`${baseUrl}change-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        oldPassword: oldPassword,
        newPassword: newPassword,
      }),
    });
    return await response.json();
  } catch (e) {
    console.log(e.message);
  }
}

export async function changeUsername(oldUsername, newUsername, password) {
  try {
    const response = await fetch(`${baseUrl}change-username`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        oldUsername: oldUsername,
        newUsername: newUsername,
        password: password,
      }),
    });
    return await response.json();
  } catch (e) {
    console.log(e.message);
  }
}

export async function changeAvatar(newAvatar, username) {
  try {
    const response = await fetch(`${baseUrl}change-avatar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        newAvatar: newAvatar,
      }),
    });
    return await response.json();
  } catch (e) {
    console.log(e.message);
  }
}

export async function submitScore(score, username) {
  try {
    const response = await fetch(`${baseUrl}submit-score`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        score: score,
      }),
    });
    return await response.json();
  } catch (e) {
    console.log(e.message);
  }
}

export async function fetchPersonalLeaderBoard(setScoreList, username) {
  const apiResponse = await fetch(
    `${baseUrl}personal-leaderboard?user=${username}`
  );
  const scoreData = await apiResponse.json();
  setScoreList(scoreData);
}
