import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'b50ff112-96c4-431a-ab15-f4985de0e9b7',
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  follow(userId) {
    return instance.post(`follow/${userId}`);
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },

  getProfile(userId) {
    console.warn('Obsolete method. Please profileAPI object');
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },

  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },

  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
};
