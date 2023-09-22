import { Router } from 'express';
import * as shopifyAPI from '../api/shopify.js';

const router = Router();

router.post('/create', async (req, res) => {
	try {
		const product = await shopifyAPI.createProductWithTitle(req.body.title);

		const metafield = await shopifyAPI.createMetafieldForProduct(product.id, req.body.tags);

		res.status(201).send({
			"message": "Product created",
			product,
			metafield
		});
	} catch (error) {
		res.status(500).send(error);
	}
});

export default router;
