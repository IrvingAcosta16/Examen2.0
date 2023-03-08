

function Resultados(){

    let NivelEstudio = document.getElementById('NivelEstudio').value;

    let nombre = document.getElementById('Nombre').value;
    let nivel = document.getElementById('NivelEstudio').value;
    let subTotal = 0;
    let dias = document.getElementById('DiasTrabajados').value;
    let pago = document.getElementById('PagoDiario').value;
    let impuesto = 0;
    let descuento = 0;
    let TotalAPagar = 0;

    if(NivelEstudio == "1"){
        impuesto = pago * 1.20;
        subTotal = impuesto * dias;
        descuento = subTotal * 0.16;
        TotalAPagar = subTotal - descuento;
        
        console.log('NombreFinal:' + nombre);
        document.getElementById('NombreFinal').value = nombre;
        console.log('GradoFinal:' + nivel);
        document.getElementById('GradoFinal').value = nivel;
        console.log('DiasFinal:' + dias);
        document.getElementById('DiasFinal').value = dias;
        console.log('PagoFinal:' + pago);
        document.getElementById('PagoFinal').value = pago;
        console.log('SubTotal:' + subTotal);
        document.getElementById('SubTotal').value = subTotal;
        console.log('Impuesto:' + descuento);
        document.getElementById('Impuesto').value = descuento;
        console.log('TotalAPagar:' + TotalAPagar);
        document.getElementById('TotalAPagar').value = TotalAPagar;

    }else if(NivelEstudio == "2"){
        impuesto = pago * 1.50;
        subTotal = impuesto * dias;
        descuento = subTotal * 0.16;
        TotalAPagar = subTotal - descuento;
        
        console.log('NombreFinal:' + nombre);
        document.getElementById('NombreFinal').value = nombre;
        console.log('GradoFinal:' + nivel);
        document.getElementById('GradoFinal').value = nivel;
        console.log('DiasFinal:' + dias);
        document.getElementById('DiasFinal').value = dias;
        console.log('PagoFinal:' + pago);
        document.getElementById('PagoFinal').value = pago;
        console.log('SubTotal:' + subTotal);
        document.getElementById('SubTotal').value = subTotal;
        console.log('Impuesto:' + descuento);
        document.getElementById('Impuesto').value = descuento;
        console.log('TotalAPagar:' + TotalAPagar);
        document.getElementById('TotalAPagar').value = TotalAPagar;

    }else if(NivelEstudio == "3"){
        impuesto = pago * 2;
        subTotal = impuesto * dias;
        descuento = subTotal * 0.16;
        TotalAPagar = subTotal - descuento;
        
        console.log('NombreFinal:' + nombre);
        document.getElementById('NombreFinal').value = nombre;
        console.log('GradoFinal:' + nivel);
        document.getElementById('GradoFinal').value = nivel;
        console.log('DiasFinal:' + dias);
        document.getElementById('DiasFinal').value = dias;
        console.log('PagoFinal:' + pago);
        document.getElementById('PagoFinal').value = pago;
        console.log('SubTotal:' + subTotal);
        document.getElementById('SubTotal').value = subTotal;
        console.log('Impuesto:' + descuento);
        document.getElementById('Impuesto').value = descuento;
        console.log('TotalAPagar:' + TotalAPagar);
        document.getElementById('TotalAPagar').value = TotalAPagar;
    }    
}