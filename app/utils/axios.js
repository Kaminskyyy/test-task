import axios from "axios";

export default axios.create({
	baseURL: "https://test-task-store-123.myshopify.com/admin/api/2023-07",
	headers: {
		"X-Shopify-Access-Token": process.env.ACCESS_TOKEN
	}
})
