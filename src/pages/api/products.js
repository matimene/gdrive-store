import axios from "axios";
import config from "../../helpers/config";
import Papa from "papaparse";

export function getProducts() {
  return axios
    .get(config.CSV_API_URL, { responseType: "blob" })
    .then((response) => {
      return new Promise((resolve, reject) => {
        Papa.parse(response.data, {
          header: true,
          complete: (results) => {
            const products = results.data
              .map((item) => ({
                ...item,
                star: item.star === "Y",
              }))
              .filter((item) => item.id.length);
            return resolve({ products });
          },
          error: (error) => reject(error.message),
        });
      });
    });
}
