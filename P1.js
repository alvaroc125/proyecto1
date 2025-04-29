function filtrarTabla() {
    const input = document.getElementById("filtro").value.toLowerCase();
    const filas = document.querySelectorAll("table tr");
  
    filas.forEach((fila, index) => {
      if (index === 0) return; // saltar encabezado
      const celda = fila.cells[0];
      if (celda && celda.innerText.toLowerCase().includes(input)) {
        fila.style.display = "";
      } else {
        fila.style.display = "none";
      }
    });
  }

