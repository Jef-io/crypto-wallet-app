import { 
    postRequest, 
    getRequest 
} from "./api";

const buyCrypto = async (deal) => {
    try {
        const result = await postRequest('transaction/buy/admin', deal);
        return result;
    } catch (error) {
        throw error
    }
}

const sellCrypto = async (deal) => {
    try {
        const result = await postRequest('transaction/sell/admin', deal);
        return result;
    } catch (error) {
        throw error
    }
}

const getHistory = async () => {
    try {
        const result = await getRequest('transaction/admin');
        return result;
    } catch (error) {
        throw error
    }
}

export {
    buyCrypto,
    sellCrypto,
    getHistory
}