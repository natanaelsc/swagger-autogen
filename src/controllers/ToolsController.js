module.exports = {

	async show(_, res) {
		res.setHeader('Content-Type', 'application/json')
		return res.status(200).send(true)
	},

	async delete(_, res) {
		return res.status(204).send("delete")
	}
}