const getDay = new Date();
const gethours = getDay.getHours();
export const closeTime = gethours >= 22;
export const openTime = gethours < 10;
export const PAGE_SIZE = 10;
