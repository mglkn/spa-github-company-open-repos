import axios from 'axios';

import { IRepo } from '../store/reducers/github';

const REPOS_LIMIT = 10;

export const fetchOrg = async (orgName: string): Promise<{ repos_count: number }> => {
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

export const fetchRepos = async (orgName: string, page = 0): Promise<IRepo[]> => {
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