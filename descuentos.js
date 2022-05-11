// const precioOriginal = 120;
// const descuento = 18;

// function calcularPrecioConDescuento (precio, descuento){

//     const porcentajePrecioConDescuento = 100-descuento;
//     const precioConDescuento = (precio*porcentajePrecioConDescuento)/100;
//     return precioConDescuento;
// }


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });
var precioConDescuento2 = 0;

//Subtotal
function setSubtotal(){
   $('input[name=subTotal]').val( +($('input[name=mascaraBatman]').val()) +(+ $('input[name=capaBatman]').val()) );
   calcular()
}

$('input').blur(() => setSubtotal());

$('input').ready(() => setSubtotal());

$('input').keyup (() => setSubtotal());

$('input').click(() => setSubtotal());
//Subtotal end


//Total equals subtotal at a begginig

 $('input').ready(function(){
   $('input[name=total]').val( ($('input[name=subTotal]').val())  );
 });












 function calcular(){
     var valor1 = parseInt(document.getElementById('priceStage1TVStop').value);     
     document.getElementById('priceStage1TVS').innerHTML = valor1;

     var valor2 = parseInt(document.getElementById('priceStage2Localtop').value);     
     document.getElementById('priceStage2TVS').innerHTML = valor2;
     var valor3 = parseInt(document.getElementById('priceStage2Localtop').value);     
     document.getElementById('priceStage3TVS').innerHTML = valor3;
                    }

                   
               
            





   //    $('input').blur(function(){
   //     $('input[name=]').val() = precioConDescuento22;
   //   });

   //   $('input').focus(function(){
   //     $('input[name=total]').val() = precioConDescuento22;
   //  });
 

   //  $('input').keyup (function(){
   //     $('input[name=total]').val() = precioConDescuento22;
   //  });
   
   //   $('input').click(function(){
   //     $('input[name=total]').val() = precioConDescuento22;
   //  });






// let products = [];
// function comprar(){
//    fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=> {
//                products = json;
//                render()
//             })
// }
// function render(){
//    products.forEach(el => {
//       const product = `<div class="col-lg-3">
//          <h3>${el.title}</h3>
//          <h2>${el.price}</h2>
//          <img src="${el.image}" class="img-fluid"/>
//          <p>${el.description}</p>
//       </div>`;
//       $('#products-container').append(product)
//    });
// }
// $('#order').click(() => comprar())







                    

   //                  function calcular2(){
   //  var valor11 = parseInt(document.getElementById('subTotal').value);
   //  var valor22 = parseInt(document.getElementById('discount').value);
   //  var valor33 = parseInt(document.getElementById('total').value);

   //  var precioConDescuento11 = (100-valor22);
   //  var precioConDescuento22 = (valor11*precioConDescuento11)/100;
   // // document.getElementById('total').value = precioConDescuento2;
                    

   
   // //    $('input').blur(function(){
   // //       $('input[name=total]').val = (precioConDescuento22);
   // //    });
     
   // //     $('input').keyup (function(){
   // //       $('input[name=total]').val = (precioConDescuento22);
   // //   });
     
   // //    $('input').click(function(){
   // //       $('input[name=total]').val = (precioConDescuento22);
   // //   });


   //   $('input').blur(function(){
   //    $('input[name=total]').val() = precioConDescuento22;
   //  });

   //  $('input').focus(function(){
   //    $('input[name=total]').val() = precioConDescuento22;
   // });
 

   // $('input').keyup (function(){
   //    $('input[name=total]').val() = precioConDescuento22;
   // });
   
   //  $('input').click(function(){
   //    $('input[name=total]').val() = precioConDescuento22;
   // });





   // }



                  //    $('input').ready(function(){
                  //     $('input[name=total]').val( ($('input[name=subTotal]').val())  );
                  //  });

        