    import { useEffect, useState } from 'react';  
    import api from '#services/api.js';

    // Componente isolado para os itens da lista
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

    export default function Home() {
        const [data, setData] = useState(null);

        useEffect(() => {
            api.get("/produtos")
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => {
                    console.error("Erro ao buscar dados:", error);
                    setData([]); // Evita travar a tela em caso de erro
                });
        }, []);

        // Evita ler .map() de um estado nulo enquanto a API responde
        if (!data) {
            return (
                <div className="flex justify-center items-center h-screen">
                    <span className="loading loading-dots loading-lg text-primary"></span>
                </div>
            );
        }

        return (
            <main className="p-4 max-w-3xl mx-auto">
                <section>
                    {/* Container principal da lista DaisyUI */}
                    <ul className="list bg-base-100 rounded-box shadow-md">
                        
                        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide font-bold">
                            Produtos Recentes
                        </li>
                        
                        {/* Renderização dinâmica */}
                        {data.map((produto) => (
                            <ProdutoCard
                                key={produto.id}
                                nome={produto.nome}
                                preco={produto.preco}
                            />
                        ))}
                        
                    </ul>
                </section>
            </main>
        );
    }