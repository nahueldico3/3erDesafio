

/*  
- Necesito que el usuario verifique su nombre y edad
- Necesito mostrar los productos con sus nombres y precios
- Necesito que se sume el iba automaticamente
- Necesito que se vayan acumulando los productos a un carrito
- Necestio que si la compra supera los $500 pesos le diga que tiene envio gratis sino que le avise que le cuesta $100 pesos mas
*/

// const edad = prompt("ingrese su edad")


// const usuario = {
//     nombre: prompt("ingrese su nombre"),
//     apellido: prompt("ingrese su apellido")
// }

// do {
//     console.log("1. Alfajor $150 \n 2. Caramelos $5 \n 3. Tita $60 \n 4. Chupetin $30 \n 5. Chicle $100\n 0. Ninguno");
//     producto = parseFloat(prompt("Seleccione el producto"));
//     break;
// } while (producto !== "0");

const listaProductos = [
    {
        name: "Alfajor Jorgelin",
        tipo: "Negro",
        price: 150,
    },
    {
        name: "Sugus",
        tipo: "Verdes",
        price: 5,
    },
    {
        name: "Tita",
        tipo: "Doble",
        price: 60,
    },
    {
        name: "Chupetin Evolution",
        tipo: "Azul",
        price: 30,
    },
    {
        name: "Beldent",
        tipo: "Menta",
        price: 100,
    }
]

const btnFinalizar = document.querySelector("#btn")
btnCompra.addEventListener("click", () => {
    Swal.fire({
        position: 'button-center',
        icon: 'success',
        title: 'Compra Finalizada',
        showConfirmButton: false,
        timer: 1500
    })
})

const btnCancel = document.querySelector("#btn")
btnCancelar.addEventListener("click", () => {
    const swalWithBootstrapButtons = Swal.mixin({
        btnBotonCancel:{ 
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Quieres cancelar esta compra?',
        text: "Seras enviado al home!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Tu compra fue eliminada',
            'Vuleve pronto!',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Tu compra sigue en pie',
            'Aprovecha los productos!',
            'error'
          )
        }
      })
})

const btnSumarCarrito = document.querySelector("#btn")
btnSumarC.addEventListener("click", () => {
    Swal.fire('Se sumo al carrito!')
})