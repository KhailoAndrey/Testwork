import axios from 'axios';

axios.defaults.baseURL = 'https://645bb75199b618d5f323b663.mockapi.io';

export async function updateUsers(userId, followers) {
  const response = await axios.put(`/users/${userId}`, { followers });
  return response;
}
