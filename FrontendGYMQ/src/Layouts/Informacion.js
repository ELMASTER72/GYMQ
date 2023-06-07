import React from 'react';

const Informacion = ({ mostrar }) => {
  if (!mostrar) {
    return null; // Si no se debe mostrar la información, retorna null para no renderizar nada
  }

  return (
    <div>
      {/* Aquí puedes agregar el contenido que deseas mostrar */}
      <p style={{fontSize: '15px'}}>jueves	5:30 - 12:00, 15:00 - 21:00 <br />
         viernes 5:30 - 12:00, 15:00 - 21:00 <br />
         sábado	9:00 - 12:00 <br />
         domingo Cerrado <br />
         lunes 5:30 - 12:00, 15:00 - 21:00 <br />
         martes	5:30 - 12:00, 15:00 - 21:00 <br />
         miércoles 5:30 - 12:00, 15:00 - 21:00 
</p>
    </div>
  );
};

export default Informacion;
