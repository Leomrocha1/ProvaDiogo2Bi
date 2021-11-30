using System;

namespace API.Models
{
    public class FormaPagamento
    {
        public FormaPagamento() => CriadoEm = DateTime.Now;
        public int FormaPagamentoId { get; set; }

        public string MetodoPagamento { get; set; }

        public string OpcaoPagamento { get; set; }

        public DateTime CriadoEm { get; set; }

    }
}