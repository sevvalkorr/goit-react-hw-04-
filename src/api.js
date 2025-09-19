
import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

let params = {
  client_id: "cjwJ8AYN8iFDmvS7_dh6ERj3szXNOkundg_m3cSB3Zk",
  query : '',
  page : '',
};

export async function getPhotos(query,page) {

  params.query = query;
  params.page = page;

  const response = await axios.get("/search/photos", { params });
    return response.data.results;
}