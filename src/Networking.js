const baseUrl = "https://the-dino-game-api.herokuapp.com/";

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

export async function setSession(username, sessionId) {
  const response = await fetch(`${baseUrl}set-session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, sessionId: sessionId }),
  });
  const json = await response.json();
  return json;
}

export async function getSession(sessionId, changeUser, setCurrentAvatar) {
  const response = await fetch(`${baseUrl}get-session?session=${sessionId}`);
  const json = await response.json();
  if (json.length > 0) {
    changeUser(json[0][0]);
    setCurrentAvatar(json[0][1]);
  } else {
    changeUser("");
  }
  return json;
}

export async function removeSession(sessionId) {
  try {
    const response = await fetch(`${baseUrl}delete-session`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sessionId: sessionId }),
    });
    return await response.json();
  } catch (e) {
    console.log(e.message);
  }
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

export async function fetchPersonalLeaderBoard(
  setScoreList,
  username,
  setHighScore
) {
  const apiResponse = await fetch(
    `${baseUrl}personal-leaderboard?user=${username}`
  );
  const scoreData = await apiResponse.json();
  setScoreList(scoreData);
  if (scoreData.length > 0) {
    setHighScore(scoreData[0]["score"]);
  }
}

export async function fetchGlobalLeaderBoard(setGlobalList) {
  const apiResponse = await fetch(`${baseUrl}global-leaderboard`);
  let scoreData = await apiResponse.json();
  scoreData.sort(({ score: a }, { score: b }) => b - a);
  for (let i = 0; i < scoreData.length; i++) {
    scoreData[i].rank = i + 1;
  }
  setGlobalList(scoreData);
}

export async function getRank(username, setRank) {
  const apiResponse = await fetch(`${baseUrl}get-rank?user=${username}`);
  let rankData = await apiResponse.json();
  setRank(rankData[0]);
}

export async function checkUserExists(username, setCurrentSearchedUser) {
  const apiResponse = await fetch(
    `${baseUrl}check-user-exists?user=${username}`
  );
  const userData = await apiResponse.json();
  if (userData.length === 0) {
    setCurrentSearchedUser(false);
  } else {
    setCurrentSearchedUser(username);
  }
}

export async function getUserAvatar(username, setSearchedUserAvatar) {
  const apiResponse = await fetch(`${baseUrl}user-avatar?user=${username}`);
  const returnedAvatars = await apiResponse.json();
  if (returnedAvatars.length > 0) {
    setSearchedUserAvatar(returnedAvatars[0]);
  }
}
