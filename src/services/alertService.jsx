import axios from 'axios';

const API_URL = 'http://localhost:5000/track_alerts';

const getAlerts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching alerts:', error);
  }
};

export { getAlerts };
