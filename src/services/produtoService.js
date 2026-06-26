import api from '#services/api.js'

class ProdutoService {
  static async getProdutos() {
    try {
      const response = await api.get('/products')
      return response.data
    } catch (error) {
      console.error('Erro ao buscar produtos:', error)
      throw error
    }
  }
  static async postProduto(produto) {
    try {
      const response = await api.post('/products', produto)
      return response.data
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  static async putProduto(produto) {
    try {
      const response = await api.put('/products', produto)
      return response
    } catch (error) {
      return error
    }
  }

  static async deleteProduto(id) {
    try {
      const response = await api.delete(`/products/${id}`)
      return response.data
    } catch(error) {
      return error
    }
  }
}

export default ProdutoService
