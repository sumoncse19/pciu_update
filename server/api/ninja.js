export default defineEventHandler(async (event) => {
  // handle query params
  // Need to use 'getQuery' instead of 'useQuery'
  const { name } = getQuery(event);

  // handle post data
  // Need to use 'readBody' instead of 'useBody'
  const { age } = await readBody(event);

  // api call with private key
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=tKCIGtbH0wi9hGs281kI6D0nJfeQon5p1e4SyyNn"
  );

  return {
    message: `Hello, ${name}! You are ${age} years old.`,
    data,
  };
});
