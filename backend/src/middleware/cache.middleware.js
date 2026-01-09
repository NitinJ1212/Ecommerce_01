import { getCache } from "../services/cache.service.js";

export const cacheMiddleware = (keyBuilder, ttl) => {
    return async (req, res, next) => {
        const key = keyBuilder(req);
        console.log(key, "0000000----------------------",keyBuilder())
        const cachedData = await getCache(key);

        if (cachedData) {
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
