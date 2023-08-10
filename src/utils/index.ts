/**
 * @param data any array input
 * @returns randomizes the array
 */
const randomizeData = <T>(data: T[]): T[] => {
  return data.sort(() => Math.random() - 0.5);
};

const sleep = async (time = 1000) => {
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve("");
    }, time)
  );
};

export { randomizeData, sleep };
