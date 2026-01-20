import { getCache } from "../services/cache.service.js";

export const cacheMiddleware = (keyBuilder, ttl) => {
    return async (req, res, next) => {
        const key = keyBuilder(req);
        const cachedData = await getCache(key);

        if (cachedData) {
            console.log(key, "from Redis cache----------------------", cachedData)
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
