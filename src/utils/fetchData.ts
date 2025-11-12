import axios from 'axios';

const fetchData = async (url: string) => {
    try {
        console.log('Fetching data from:', url);
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export default fetchData;
