const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const getScores = async () => {
  const response = await fetch(`${API_URL}games/oMVJyAsb3jLwm0qIyaNT/scores/`);
  const data = await response.json();
  return data.result;
};

const addScore = async (name, score) => {
  const response = await fetch(`${API_URL}games/oMVJyAsb3jLwm0qIyaNT/scores/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: name, score }),
  });
  const data = await response.json();
  return data.result;
};

export { getScores, addScore };