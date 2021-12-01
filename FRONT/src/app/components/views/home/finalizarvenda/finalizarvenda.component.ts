import { Venda } from './../../../../models/venda';
import { Router } from '@angular/router';
import { VendaService } from './../../../../services/venda.service';
import { FormaPagamentoService } from './../../../../services/formapagamento.service';
import { FormaPagamento } from './../../../../models/formapagamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finalizarvenda',
  templateUrl: './finalizarvenda.component.html',
  styleUrls: ['./finalizarvenda.component.css']
})
export class FinalizarvendaComponent implements OnInit {
  nome!: string;
  formapagamentos!: FormaPagamento[];
  formapagamentoId!: number;

  constructor(
    private router: Router,
    private formapagamentoService: FormaPagamentoService,
    private vendaService: VendaService){}

  ngOnInit(): void {
    this.formapagamentoService.list().subscribe((formapagamentos) => {
      this.formapagamentos = formapagamentos;
  });
  }
  finalizar(): void {
    let venda: Venda = {
        nome: this.nome,
        formapagamentoId: this.formapagamentoId
    };
    this.vendaService.create(venda).subscribe((venda) => {
        console.log(venda);
        this.router.navigate(["home/carrinho/finalizar/listar"]);
    });
}

}
