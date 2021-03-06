import Auth from '../../../api/Auth';
import * as types from './mutation-types';

export const register = async ({ dispatch, commit }, payload) => {
    const json = await new Auth().register(payload);

    commit(types.LOGIN, {
        token: json.token,
    });

    await dispatch('getUserCurrent');
};

export const login = async ({ dispatch, commit }, payload) => {
    const json = await new Auth().login(payload);

    commit(types.LOGIN, {
        token: json.token,
    });

    await dispatch('getUserCurrent');
};

export const logout = async ({ commit }) => {
    commit(types.ID, null);
    commit(types.NAME, null);
    commit(types.EMAIL, null);
    commit(types.CREATED_AT, null);
    commit(types.UPDATED_AT, null);
    commit(types.LOGOUT);
};

export const passwordEmail = async (context, payload) => new Auth().passwordEmail(payload);

export const resetPassword = async (context, payload) => new Auth().resetPassword(payload);

export const getUserCurrent = async ({ commit }) => {
    const json = await new Auth().getCurrent();

    commit(types.ID, json.data.id);
    commit(types.NAME, json.data.name);
    commit(types.EMAIL, json.data.email);
    commit(types.CREATED_AT, json.data.created_at);
    commit(types.UPDATED_AT, json.data.updated_at);
};

export const checkLogged = async ({ dispatch, commit }) => {
    const token = window.Cookies.get('token');

    if (token !== undefined) {
        commit(types.LOGIN, {
            token,
        });

        await dispatch('getUserCurrent');
    }
};

export default {
    login,
    logout,
    register,
    passwordEmail,
    resetPassword,
    getUserCurrent,
    checkLogged,
};
