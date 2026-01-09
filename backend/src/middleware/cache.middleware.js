import { getCache } from "../services/cache.service.js";

export const cacheMiddleware = (keyBuilder, ttl) => {
    return async (req, res, next) => {
        const key = keyBuilder(req);
<<<<<<< HEAD
        const cachedData = await getCache(key);

        if (cachedData) {
            console.log(key, "from Redis cache----------------------", cachedData)
=======
        console.log(key, "0000000----------------------",keyBuilder())
        const cachedData = await getCache(key);

        if (cachedData) {
>>>>>>> 1569137d19793e49bbef48e8bae30f94d9d9492c
            return res.json(cachedData);
        }

        res.sendResponse = res.json;
        res.json = (body) => {
            import("../services/cache.service.js").then(({ setCache }) => {
                setCache(key, body, ttl);
            });
            res.sendResponse(body);
        };

        next();
    };
};
