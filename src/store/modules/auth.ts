import { ActionContext } from 'vuex';
import { AuthState, RootState } from '../types';

const authState: AuthState = {
  isAuthenticated: false,
  message: null,
  error: null,
  user: null,
};

const mutations = {
  LOGIN(state: AuthState, payload: { email: string }) {
    state.isAuthenticated = true;
    state.message = 'Success signing in';
    state.user = payload;
  },
  SET_ERROR(state: AuthState, payload: { message: string }) {
    state.error = payload.message;
  },
  LOGOUT(state: AuthState) {
    state.isAuthenticated = false;
    state.user = null;
  },
};

const actions = {
  login(
    { commit }: ActionContext<AuthState, RootState>,
    { email, password }: { email: string, password: string },
  ) {
    const staticUser = { email: 'admin@mail.com', password: 'semuasama' };

    if (email === staticUser.email && password === staticUser.password) {
      commit('LOGIN', { email });
      return true;
    }

    commit('SET_ERROR', { message: 'Wrong credentials, please try again' });
    return false;
  },
  logout({ commit }: ActionContext<AuthState, RootState>) {
    commit('LOGOUT');

    return true;
  },
};

const getters = {
  getUser: (state: AuthState) => state.user,
  getError: (state: AuthState) => state.error,
};

export default {
  namespaced: true,
  state: authState,
  mutations,
  actions,
  getters,
};
