import Swal from 'sweetalert2';
import axios from 'axios';

const btnEliminar = document.querySelector('#eliminar-proyecto');
btnEliminar.addEventListener('click', () => {
    //console.log('diste click en eliminar');
    Swal.fire({
        title: "¿Deseas borrar este proyecto?",
        text: "Un proyecto eliminado no se puede recuperar",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminarlo',
        cancelButtonText: 'No, cancelar'
    }).then((result) => {
        if (result.value) {
            Swal.fire(
                'Proyecto eliminado',
                'El proyecto se ha sido eliminado.',
                'sucess'
            );

            //redireccionar al inicio
            setTimeout(() => {
                window.location.href = '/'
            }, 3000);
        }
    })
})