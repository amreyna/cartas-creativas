<script>
 // Espera a que el formulario intente enviarse
 document.getElementById('formulario-imagen').addEventListener('submit', function (e) {
   const archivo = document.getElementById('imagen').files[0]; // obtiene el archivo seleccionado
   const mensajeError = document.getElementById('error-mensaje');
 
   // Limpiamos el mensaje previo
   mensajeError.textContent = "";
 
   // Validar tamaño (menos de 4 MB)
   if (archivo.size > 4 * 1024 * 1024) {
     e.preventDefault(); // detenemos el envío
     mensajeError.textContent = "⚠️ La imagen no debe superar los 4 MB.";
     return;
   }
 
   // Validar tipo de archivo (solo imágenes)
   const tiposPermitidos = ['image/jpeg', 'image/png', 'image/gif'];
   if (!tiposPermitidos.includes(archivo.type)) {
     e.preventDefault();
     mensajeError.textContent = "⚠️ Solo se permiten imágenes JPG, PNG o GIF.";
     return;
   }
 });
</script>
