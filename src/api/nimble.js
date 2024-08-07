async function get(relativeUrl) {

  const options = {
    method: 'GET',
    headers: {
      contentType: 'application/json',
      accept: '*/*',
      Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`
    }
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_BASE_URL}/api/v1${relativeUrl}`,
    options);
  return response.json();
}


export const client = {
  async getContactById(id) {
    const response = await get(`/contact/${id}`);
    return response.resources
  },

  async getContactList() {
    const response = await get('/contacts');
    return response.resources
  }

}