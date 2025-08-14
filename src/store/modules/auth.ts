import { ActionContext } from 'vuex';
import { AuthState, RootState } from '../types';

const authState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const mutation = {
  LOGIN(state: AuthState, payload: { email: string }) {
    state.isAuthenticated = true;
    state.user = payload;
  },
  LOGOUT(state: AuthState) {
    state.isAuthenticated = false;
    state.user = null;
  },
};

const action = {
  login(
    { commit }: ActionContext<AuthState, RootState>,
    { email, password }: { email: string, password: string },
  ) {
    const staticUser = { email: 'admin@mail.com', password: 'semuasama' };

    if (email === staticUser.email && password === staticUser.password) {
      commit('LOGIN', { email });
      return true;
    }

    return false;
  },
  logout({ commit }: ActionContext<AuthState, RootState>) {
    commit('LOGOUT');

    return true;
  },
};

const getters = {
  getUser: (state: AuthState) => state.user,
};

export default {
  state: authState,
  mutation,
  action,
  getters,
};
