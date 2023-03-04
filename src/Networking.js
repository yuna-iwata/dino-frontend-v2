const backendBaseURL = "https://the-dino-game-api.herokuapp.com/";
const flickrBaseURL = "https://www.flickr.com/services/rest/";
const flickrApiKey = "593054fa7e390be7af02ea28725dbc20";
const flickrAlbumId = 52724064111;

export async function fetchImage(photoName) {
  try {
    const response = await fetch(
      `${flickrBaseURL}/?method=flickr.photosets.getPhotos&api_key=${flickrApiKey}&photoset_id=${flickrAlbumId}&format=json&nojsoncallback=1`
    );
    const data = await response.json();
    const photo = data.photoset.photo.find((p) => p.title === photoName);
    if (photo) {
      const photoResponse = await fetch(
        `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
      );
      return photoResponse.url;
    }
  } catch (e) {
    console.log(e.message);
  }
}

export async function submitUser(username, password) {
  const response = await fetch(`${backendBaseURL}create-account`, {
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
  const response = await fetch(`${backendBaseURL}set-session`, {
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
  const response = await fetch(
    `${backendBaseURL}get-session?session=${sessionId}`
  );
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
    const response = await fetch(`${backendBaseURL}delete-session`, {
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
    const response = await fetch(`${backendBaseURL}login`, {
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
    const response = await fetch(`${backendBaseURL}delete-account`, {
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
    const response = await fetch(`${backendBaseURL}change-password`, {
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
    const response = await fetch(`${backendBaseURL}change-username`, {
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
    const response = await fetch(`${backendBaseURL}change-avatar`, {
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

export async function submitScore(score, username, items) {
  try {
    const response = await fetch(`${backendBaseURL}submit-score`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        score: score,
        items: items,
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
    `${backendBaseURL}personal-leaderboard?user=${username}`
  );
  const scoreData = await apiResponse.json();
  setScoreList(scoreData);
  if (scoreData.length > 0) {
    setHighScore(scoreData[0]["score"]);
  }
}

export async function fetchGlobalLeaderBoard(setGlobalList) {
  const apiResponse = await fetch(`${backendBaseURL}global-leaderboard`);
  let scoreData = await apiResponse.json();
  scoreData.sort(({ score: a }, { score: b }) => b - a);
  for (let i = 0; i < scoreData.length; i++) {
    scoreData[i].rank = i + 1;
  }
  setGlobalList(scoreData);
}

export async function getRank(username, setRank) {
  const apiResponse = await fetch(`${backendBaseURL}get-rank?user=${username}`);
  let rankData = await apiResponse.json();
  setRank(rankData[0]);
}

export async function checkUserExists(username, setCurrentSearchedUser) {
  const apiResponse = await fetch(
    `${backendBaseURL}check-user-exists?user=${username}`
  );
  const userData = await apiResponse.json();
  if (userData.length === 0) {
    setCurrentSearchedUser(false);
  } else {
    setCurrentSearchedUser(username);
  }
}

export async function getUserAvatar(username, setSearchedUserAvatar) {
  const apiResponse = await fetch(
    `${backendBaseURL}user-avatar?user=${username}`
  );
  const returnedAvatars = await apiResponse.json();
  if (returnedAvatars.length > 0) {
    setSearchedUserAvatar(returnedAvatars[0]);
  }
}

export async function getUnlockedAvatars(username, setUnlockedAvatars) {
  const apiResponse = await fetch(
    `${backendBaseURL}unlocked-avatars?user=${username}`
  );
  const unlockedAvatars = await apiResponse.json();
  setUnlockedAvatars(unlockedAvatars[0][0]);
}
