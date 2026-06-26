import { useEffect, useState } from 'react'
import Service from '#services/produtoService.js'
import ProdutoCard from '#components/ProdutoCard.jsx'
import LoadingComponent from '#components/Loading.jsx'
import FormPesquisa from '../../components/FormPesquisa'

export default function Home() {
  const [listaProduto, setData] = useState([])
  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')

  useEffect(() => {
    let ativo = true

    async function buscarDados() {
      const produtos = await Service.getProdutos()
      if (ativo) {
        setData(produtos)
      }
    }
    buscarDados()
    
    return () => {
      ativo = false
    }
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    
    try {
      const produto = await Service.postProduto({
        nome,
        preco: Number(preco)
      })
      setData((lista) => [...lista, produto])
      setNome('')
      setPreco('')
    } catch (error) {
          console.error('Erro ao buscar produtos:', error)

    }
  }
  
  async function handleDelete(id){
    try {
      await Service.deleteProduto(id)
      setData((lista) => lista.filter((produto) => produto.id !== id))

    } catch (error) {
      console.error("Erro ao deletar produto:", error)
    }
  }
  
  if (!listaProduto) return <LoadingComponent />

  return (
    <main className="max-w-3xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Produtos Recentes
      </h1>

      <FormPesquisa 
        handleSubmit={handleSubmit}
        nome={nome}
        preco={preco}
        setNome={setNome}
        setPreco={setPreco}
      />

      <ul className="list bg-base-100 rounded-box shadow">

        {listaProduto.map((produto) => (
          <ProdutoCard
            key={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            id={produto.id}
            handleDelete={handleDelete}
          />
        ))}

      </ul>

    </main>
  )
}