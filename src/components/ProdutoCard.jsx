function ProdutoCard({ nome, preco, id, handleDelete}) {
  return (
    <li className="list-row flex items-center justify-between p-4 border-b border-base-200">

      <div>
        <div className="size-10 rounded-box bg-primary text-primary-content flex items-center justify-center font-bold">
          {nome.charAt(0).toUpperCase()}
        </div>
      </div>

      <div className="flex-1 ml-4">
        <div className="font-medium">
          {nome}
        </div>

        <div className="text-xs uppercase opacity-60">
          Preço: R$ {Number(preco).toFixed(2)}
        </div>
      </div>

      <button 
        className="btn btn-outline btn-error" 
        onClick={() => handleDelete(id)}
      >
        Excluir
      </button>

    </li>
  )
}

export default ProdutoCard