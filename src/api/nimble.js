const getOptions = (methodType, data = null) => {
  const options = {
    method: methodType,
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*',
      Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`,
    },
  }
  return data ? {...options, body: JSON.stringify(data)} : options;
};


async function get(relativeUrl) {
  const options = getOptions("GET");
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_BASE_URL}/api/v1${relativeUrl}`,
    options);

  return response.json();
}

async function post(relativeUrl, data) {
  const options = getOptions("POST", data);
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_BASE_URL}/api/v1${relativeUrl}`,
    options);

  return response.json();
}

async function put(relativeUrl, data) {
  const options = getOptions("PUT", data);
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_BASE_URL}/api/v1${relativeUrl}`,
    options);

  return response.json();
}

async function remove(relativeUrl) {
  const options = getOptions("DELETE");
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
    const response = await get('/contacts?sort=created:desc');
    return response.resources
  },

  async createContact(data) {
    const response = await post('/contact', data);
    return response
  },

  async updateContactTags(id, data) {
    const response = await put(`/contacts/${id}/tags`, data);
    return response
  },

  async deleteContactById(id) {
    const response = await remove(`/contact/${id}`);
    return response;
  },

}