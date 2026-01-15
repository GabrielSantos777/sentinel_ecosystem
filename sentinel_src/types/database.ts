export interface Produto {
    id: string;
    nome: string;
    preco_unitario: number;
    estoque_atual: number;
    estoque_minimo: number;
    categoria: string;
}

export interface Venda{
    id: string;
    cliente_id: string;
    produto_id: string;
    quantidade: number;
    valor_total: number;
    data_venda: string;
}