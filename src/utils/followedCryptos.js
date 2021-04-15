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

const addFollowedCrypto = async (cryptoId) => {
    try {
        const result = await postRequest('follow/admin', {crypto_id: cryptoId});
        return result;
    } catch (error) {
        throw error;
    }
}

export {
    getCryptos,
    addFollowedCrypto,
    getFollowedCryptos,
    getNotFollowedCryptos
}