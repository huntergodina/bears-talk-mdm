import {DraftData} from './types'

const URL = "https://www.nflmockdraftdatabase.com/simulator/order";
const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ year: "2023" })
};

const callAPI = async () => {
	try {
		const res = await fetch(URL, requestOptions);
        const decoded = await res.json() as DraftData;
        return decoded;
	} catch (err) {
		console.log(err);
	}
};

export async function getData() {
    const apiData = await callAPI() as DraftData;
    return {
        data: apiData
    }
}