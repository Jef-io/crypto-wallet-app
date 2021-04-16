import {
    deleteRequest,
    getRequest,
    postRequest
} from "./api"

const getCryptos = async () => {
    try {
        const result = await getRequest('coins');
        return result;
    } catch (error) {
        throw error;
    }
}

const getFollowedCryptos = async () => {
    try {
        const result = await getRequest('follow/admin');
        return result;
    } catch (error) {
        throw error;
    }
}

const getNotFollowedCryptos = async () => {
    try {
        const result = await getRequest('follow/not/admin');
        return result;
    } catch (error) {
        throw error;
    }
}

const followCrypto = async (cryptoId) => {
    try {
        const result = await postRequest('follow/admin', {crypto_id: cryptoId});
        return result;
    } catch (error) {
        throw error;
    }
}

const unfollowCrypto = async (cryptoId) => {
    try {
        const result = await deleteRequest(`follow/admin/${cryptoId}`);
        return result;
    } catch (error) {
        throw error;
    }
}

export {
    getCryptos,
    getFollowedCryptos,
    getNotFollowedCryptos,
    followCrypto,
    unfollowCrypto
}