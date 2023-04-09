import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    const response = await axios.get(URL, {
      //   method: "GET",
      //   url: "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        distance_string: "0.5 km",
        //   restaurant_tagcategory_standalone: '10591',
        //   restaurant_tagcategory: '10591',
        //limit: "10",
        //   currency: 'USD',
        //   open_now: 'false',
        // lunit: 'km',
        //   lang: 'en_US'
      },
      headers: {
        "X-RapidAPI-Key": "9d9f4f2069msh7eb2c1fe2d28a97p18e847jsnb410a827dcb1",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });
    return response;
  } catch (error) {
    console.log(`Error when trying to GET the places data: `, error);
  }
};
// export const getPlacesData = async () => {
//   try {
//     const response = await axios.get(URL, {
//       params: options.params,
//       headers: options.headers,
//     });
//     return response;
//   } catch (error) {
//     console.log(`Error when trying to GET the places data: `, error);
//   }
// };
