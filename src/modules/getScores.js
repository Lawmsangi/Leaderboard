const getScores = async (gameId) => {
  const options = {
    method: 'GET',
    header: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, options);
  const data = await response.json();
  return data;
};

module.exports = getScores;