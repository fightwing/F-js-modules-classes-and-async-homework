import urlInfo from "./constant";

const getURL = () => `${urlInfo.ADDRESS}:${urlInfo.PORT}${urlInfo.PATH}`;

export default getURL;