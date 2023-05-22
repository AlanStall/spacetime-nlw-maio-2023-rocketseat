import { FastifyInstance } from 'fastify'

export async function uploadRoutes(app: FastifyInstance) {
  app.post('/upload', async (request) => {})
}
