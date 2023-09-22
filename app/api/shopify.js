import axios from '../utils/axios.js';

export const createProductWithTitle = async (title) => {
	const { data } = await axios.post('/products.json', {
		product: {
			title: title,
		},
	});

	return data.product;
};

export const createMetafieldForProduct = async (productId, value) => {
	const escapedValue = JSON.stringify(value).replace('"', '\"');

	const { data } = await axios.post(`/products/${productId}/metafields.json`, {
		metafield: {
			namespace: 'custom',
			key: 'tags',
			value: escapedValue,
			type: 'list.single_line_text_field',
		},
	});

	return data.metafield;
};
