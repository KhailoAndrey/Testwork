import axios from 'axios';

axios.defaults.baseURL = 'https://645bb75199b618d5f323b663.mockapi.io';

export async function updateUsers(userId, followers) {
  console.log(userId)
  const response = await axios.put(`/users/${userId}`, { followers });
  return response;
}

// export const updateUsers = async (userId, followers) => {
//   try { 
//     await axios.put(`/users/${userId}`, { followers })
//       .then(({ data }) => { return data });
//   }
//   catch (error) {
//     console.error(error);
//   }
// }
