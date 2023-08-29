import { Component } from '@angular/core';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component {
  contenidos1 = [
    { titulo: '¿Se trata de un curso en video?', info:'No, no son videos. En realidad, abordamos una gran cantidad de información, y si hubiéramos optado por utilizar videos, el costo sería mucho más elevado. Para hacerlo accesible, hemos decidido ofrecerlo en formato de libro digital.', visible: false },
    { titulo: '¿Qué necesito para leer el E-book?', info:'Lo único que vas a necesitar es un dispositivo para leer PDF.  Ya sea un teléfono, computadora, laptop o cualquier otro dispositivo digital adecuado para ello.' ,visible: false },
    { titulo: '¿El ebook ofrece soporte para resolver dudas?', info:'¡Sí! Estamos comprometidos en brindarte el mejor apoyo en tu camino hacia el emprendimiento de mini donas. Si tienes alguna pregunta o necesitas aclarar dudas adicionales, nuestra chef experta y su equipo están disponibles para ayudarte rapidamente a través del correo electrónico que encontrarás al final del ebook.', visible: false },
    { titulo: '¿Cómo accedo al E-book?', info:'Recibirás el acceso vía mail con un botón de enlace. Es sumamente fácil. Sólo sigue las indicaciones que ahí se te piden.', visible: false },
    { titulo: '¿En cuánto tiempo recibiré el E-book  y los bonos de regalo?', info:'Inmediatamente haces el pago te llega el acceso por mail. En ese mismo momento puedes acceder al E-book y los bonos de regalo.<br>(Excepto en caso que elijas hacer el pago en efectivo, tarda un poco más hasta que se registra tu pago).', visible: false},
    { titulo: '¿Cuáles son las ventajas de tenerlo como libro electrónico?', info:'La principal ventaja en comparación con los cursos en video es que el contenido es muy amplio y mucho más extenso que el promedio de los cursos en video.<br>Además, es de fácil consulta, ya que puedes descargarlo y tenerlo siempre a mano, incluso en tu teléfono celular. Esto te permite acceder al contenido en cualquier momento y en cualquier lugar, sin necesidad de internet.<br>Otra ventaja significativa es el costo. Si todo el contenido se hubiera elaborado en formato de video, el costo sería considerablemente más alto debido a la producción y edición de los videos. <br>Por lo tanto, podemos afirmar que proporciona más información, con un acceso más sencillo a un precio más accesible.', visible: false },
    { titulo: '¿Es seguro mi pago?', info:'¡Sí! No te preocupes el pago es realizado de forma 100% segura por medio de Hotmart, la plataforma de venta de productos digitales más grande y segura de habla hispana. El pago se lo haces directamente a ellos y son ellos los encargados de enviarte de INMEDIATO el acceso, así que no hay riesgo alguno. TU PAGO ES SEGURO.', visible: false },
  ];

  toggleContenido1(index: number) {
    this.contenidos1[index].visible = !this.contenidos1[index].visible;
  }

}

