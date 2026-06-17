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
                    <button className="btn btn-square btn-ghost">
                        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                                <path d="M6 3L20 12 6 21 6 3z"></path>
                            </g>
                        </svg>
                    </button>
                    <button className="btn btn-square btn-ghost">
                        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                            </g>
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