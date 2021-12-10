using system;
using Microsoft.AspNetCore.Mvc;
using aula25_11_2021.Models;

namespace aula25_11_2021.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class Nome : ControllerBase
    {
        [HttpPost]
        public ActionResult <Nomes> Post(NomeCliente nomeRecebido)
        {
            var nomeProcessado = new Nomes {
                NomeCompleto = $"{nomeRecebido.nome} {nomeRecebido.sobrenome}",
                NomeCatalogo = $"{nomeRecebido.sobrenome.ToUpper()} {nomeRecebido.nome}",
            };
        }
        return nomeProcessado;
    }
}