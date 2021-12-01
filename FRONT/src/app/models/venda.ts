import { FormaPagamento } from "./formapagamento";

export interface Venda {
    nome: string;
    criadoem?: string;
    formapagamentoId: number;
    formapagamento?: FormaPagamento;
}
