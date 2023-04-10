import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;
  try {
    const response = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Key": "9d9f4f2069msh7eb2c1fe2d28a97p18e847jsnb410a827dcb1",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });
    console.log({ response });
    return response;
  } catch (error) {
    console.log(`Error when trying to GET the places data: `, error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&id=524901&appid=1ef43fab14b2f2266b636da651921500`
      );

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
