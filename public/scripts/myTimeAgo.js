/**
 * This function calculates the year/month/day/hour/minute/seconds passed since createdTime and returns it as a string. If the time is greater than 1, add 's' to show that it is plural.
 *
 * @param {number} createdTime Milliseconds since epoch time the tweeter post was created.
 * @return {string} A string that displays the year/month/day/hour/minute/seconds passed since createdTime.
 */
const myTimeAgo = (createdTime) => {
  const msSincePost = Date.now() - createdTime;

  const seconds = Math.floor(msSincePost / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years) {
    return `${years} year${years > 1 ? "s" : ""} ago`;
  }
  if (months) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  }
  if (days) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  }
  if (hours) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  }
  if (minutes) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  }
  if (seconds) {
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  }
  return "Just now";
};
