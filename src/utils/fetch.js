export const Fetch = async url => {
  const response = await fetch(url);
  const result = await response.json();
  const status = await response.status;
  return { result, status };
};
