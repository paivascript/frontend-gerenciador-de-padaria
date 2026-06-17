  function ProdutoCard({ nome, preco }) {
        return (
            <li className="list-row flex items-center justify-between p-4 border-b border-base-200">
                {/* Foto fictícia do produto ou placeholder */}
                <div>
                    <div className="size-10 rounded-box bg-primary text-primary-content flex items-center justify-center font-bold text-sm">
                        {nome ? nome.charAt(0).toUpperCase() : 'P'}
                    </div>
                </div>
                
                {/* Dados vindos do seu banco */}
                <div className="flex-1 ml-4">
                    <div className="font-medium text-sm md:text-base">{nome}</div>
                    <div className="text-xs uppercase font-semibold opacity-60">
                        Preço: R$ {preco}
                    </div>
                </div>
                
                {/* Botões do DaisyUI mantidos do seu exemplo */}
                <div className="flex gap-1">
              
                    <button className="btn btn-outline btn-error">
                        <svg 
                            className="size-[1.2em]" 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        >
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                   </button>
                </div>
            </li>
        );
    }

    export default ProdutoCard;