import axios from 'axios';

const REPOS_LIMIT = 10;

export const fetchOrg = async (orgName: string) => {
  try {
    const { data } = await axios.get(`https://api.github.com/orgs/${orgName}`)
    return data;
  } catch (e) {
    if (e.response !== undefined && e.response.status === 404) {
      throw new Error(`Organization ${orgName} not found`);
    }

    throw new Error('Network error. Check internet or reload page');
  }
}

export const fetchRepos = async (orgName: string, page: number = 0) => {
  try {
    const { data } = await axios.get(`https://api.github.com/orgs/${orgName}/repos?page=${page}&per_page=${REPOS_LIMIT}`);
    return data
  } catch (e) {
    if (e.response !== undefined && e.response.status === 404) {
      throw new Error(`Organization ${orgName} not found`);
    }

    throw new Error('Network error. Check internet or reload page');
  }
}