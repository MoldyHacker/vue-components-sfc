import axios from "axios";


export default class ITunes {
	static search(keyword, limit) {
		let endpoint = 'https://itunes.apple.com/search';
		let params = {
			term: keyword,
			limit: limit ?? 24,
			// media: "ebook",
		};
		
		let config = {params: params};

		return axios.get(endpoint, config, function (data) {
			console.log('response', data);
		})
	}
}

