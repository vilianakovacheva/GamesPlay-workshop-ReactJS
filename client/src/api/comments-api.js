import requester from "./requester"

//const BASE_URL = 'http://localhost:3030/data/comments';
const BASE_URL = `${import.meta.env.VITE_BASE_URL}/data/comments`;

const create = (gameId, text) => requester.post(BASE_URL, { gameId, text });


const getAll = (gameId) => {
    const params = new URLSearchParams({
        where: `gameId="${gameId}"`,
        load: `author=_ownerId:users`
    });

    return requester.get(`${BASE_URL}?${params.toString()}`);
}


export default {
    create,
    getAll
}