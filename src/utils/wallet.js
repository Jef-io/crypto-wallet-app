import {
    getRequest,
    postRequest
} from "./api"

const getWallet = async () => {
    try {
        const result = await getRequest('cache/admin');
        return result;
    } catch (error) {
        throw error;
    }
}

const getWalletEvolution = async () => {
    try {
        const result = await getRequest('cache/history/admin');
        return result;
    } catch (error) {
        throw error;
    }
}


const getNotPossessedCryptos = async () => {
    try {
        const result = await getRequest('cache/not/admin')
        return result;
    } catch (error) {
        throw error;
    }
}

const declareCryptoAmmount = async (id, ammount, value) => {
    try {
        const result = await postRequest('cache/store/admin', {
            crypto_id: id,
            ammount: ammount,
            value: value
        })
        return result;
    } catch (error) {
        throw error;
    }
}

export {
    getWallet,
    getWalletEvolution,
    getNotPossessedCryptos,
    declareCryptoAmmount
}