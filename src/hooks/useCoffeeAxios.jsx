import { useEffect, useState } from 'react';
import axios from 'axios';

const useCoffeeAxios = () => {
	const [allData, setAllData] = useState([]);
	const [hotData, setHotData] = useState([]);
	const [icedData, setIcedData] = useState([]);
    const axiosData = async type => {
        try {
            const res = await axios.get(
                `https://api.sampleapis.com/coffee/${type}`,
            );
            return res.data;
        } catch (error) {
            console.error(error);
            return []
        }
    };
	useEffect(() => {
        const axiosAllData = async () => {
            const hotDataRes = await axiosData('hot')
            const icedDataRes = await axiosData('iced')

            setHotData(hotDataRes);
            setIcedData(icedDataRes);

            const allDataRes = [...hotDataRes, ...icedDataRes];
            setAllData(allDataRes)
        }
        axiosAllData()
	}, []);


	return {allData, hotData, icedData  };
};

export default useCoffeeAxios;
