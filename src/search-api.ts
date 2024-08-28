import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

export const fetchGallery = async (query: string, page: number) => {
  const response = await axios.get("", {
    params: {
      query: query,
      page,
      per_page: 12,
    },
    headers: {
      Authorization: "Client-ID eLtJaO_lZuuaIu9pFdsCIJaDK3Vc9K-5kWUNLMnq7CE",
    },
  });
  return response.data;
};
