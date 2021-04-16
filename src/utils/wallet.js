import {
    getRequest,
} from "./api"

const getWallet = async () => {
    try {
        const result = await getRequest('cache/admin');
        return result;
    } catch (error) {
        throw error;
    }
}

export {
    getWallet
}