function calcular() {
  var l1 = parseFloat(document.getElementById("l1").value);
  var l2 = parseFloat(document.getElementById("l2").value);
  var l3 = parseFloat(document.getElementById("l3").value);
  var l4 = parseFloat(document.getElementById("l4").value);
  var l5 = parseFloat(document.getElementById("l5").value);
  var l6 = parseFloat(document.getElementById("l6").value);

  if (Math.max(l1, l2, l3, l4, l5, l6) - Math.min(l1, l2, l3, l4, l5, l6)) {
    document.getElementById("resultado1").innerHTML = "ERROR";
  } else {
    var promedio = (l1 + l2 + l3 + l4 + l5 + l6) / 6;
    var resultadoAnterior = parseFloat(document.getElementById("resultado1").innerHTML.split(": ")[1]);
    var resultadoFinal = promedio - resultadoAnterior;
    document.getElementById("resultado1").innerHTML = "El resultado es: " + promedio;
    document.getElementById("resultado2").innerHTML = "El resultado final es: " + resultadoFinal;
  }
}

 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });
