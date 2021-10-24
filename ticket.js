var Total = 0;
const Ofertaestudiante = 0.8;
const Ofertatrainee = 0.5;
const Ofertajunior = 0.15;
const precio = 200;

function DescuentoTicket()
{
    var Tickets = document.getElementById("Cantidadtiket").value;
    var temp = document.getElementById("Categoria");
    var Category = temp.options[temp.selectedIndex].value;

    switch (Category)
    {
        case ("1"):
        {
            Oferta = Ofertaestudiante;
            break;
        }
        case ("2"):
        {
            Oferta = Ofertatrainee;
            break;
        }
        case ("3"):
        {
            Oferta = Ofertajunior;
            break;
        }
        default:
        {
            Oferta = 0.0;
            break;
        }
    }

    Total = (precio - (precio * Oferta)) * Tickets;
    document.getElementById("Total-con-descuento").innerHTML = Total;
}

function Precio_total()
{
    Total = 0;
    document.getElementById("Total-con-descuento").innerHTML = Total;
    document.getElementById("Ticket-el").reset();
}