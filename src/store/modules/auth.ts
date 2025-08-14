import { ActionContext } from 'vuex';
import { AuthState, RootState } from '../types';

const AUTH_KEY = 'auth_data';
const AUTH_EXPIRY_HOURS = 24;

const saveAuthToStorage = (user: { email: string }) => {
  const authData = {
    user,
    isAuthenticated: true,
    expiresAt: Date.now() + (AUTH_EXPIRY_HOURS * 60 * 60 * 1000),
  };
  localStorage.setItem(AUTH_KEY, JSON.stringify(authData));
};

const getAuthFromStorage = (): { user: { email: string } | null, isAuthenticated: boolean } => {
  try {
    const authData = localStorage.getItem(AUTH_KEY);
    if (!authData) return { user: null, isAuthenticated: false };

    const parsed = JSON.parse(authData);

    if (Date.now() > parsed.expiresAt) {
      localStorage.removeItem(AUTH_KEY);
      return { user: null, isAuthenticated: false };
    }

    return { user: parsed.user, isAuthenticated: parsed.isAuthenticated };
  } catch {
    localStorage.removeItem(AUTH_KEY);
    return { user: null, isAuthenticated: false };
  }
};

const removeAuthFromStorage = () => {
  localStorage.removeItem(AUTH_KEY);
};

const storedAuth = getAuthFromStorage();

const authState: AuthState = {
  isAuthenticated: storedAuth.isAuthenticated,
  message: null,
  error: null,
  user: storedAuth.user,
};

const mutations = {
  LOGIN(state: AuthState, payload: { email: string }) {
    state.isAuthenticated = true;
    state.message = 'Success signing in';
    state.user = payload;
    state.error = null;
    saveAuthToStorage(payload);
  },
  SET_ERROR(state: AuthState, payload: { message: string }) {
    state.error = payload.message;
  },
  LOGOUT(state: AuthState) {
    state.isAuthenticated = false;
    state.user = null;
    state.message = null;
    state.error = null;
    removeAuthFromStorage();
  },
  CHECK_AUTH(state: AuthState) {
    const tempStoredAuth = getAuthFromStorage();
    state.isAuthenticated = tempStoredAuth.isAuthenticated;
    state.user = tempStoredAuth.user;
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
  checkAuth({ commit }: ActionContext<AuthState, RootState>) {
    commit('CHECK_AUTH');
  },
};

const getters = {
  getUser: (state: AuthState) => state.user,
  getError: (state: AuthState) => state.error,
  isAuthenticated: (state: AuthState) => state.isAuthenticated,
};

export default {
  namespaced: true,
  state: authState,
  mutations,
  actions,
  getters,
};
