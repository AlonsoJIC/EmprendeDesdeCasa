import { Component } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {

  contenidos1 = [
    { titulo: 'MÓDULO 1: PRESENTACIÓN Y BIENVENIDA', info:'Lección 1: Bienvenida. ¿Quién soy yo?<br>Lección 2: ¿Por qué elegir mini donas?<br>Lección 3: Su actual demanda en el mercado.', visible: false },
    { titulo: 'MÓDULO 2: TIPOS DE DONAS', info:'Lección 4: Conoce 3 tipos de donas de acuerdo a su elaboración.<br>Lección 5: Donas fritas.<br>Lección 6: Donas horneadas.<br>Lección 7: Mini donas en máquina eléctrica.' ,visible: false },
    { titulo: 'MÓDULO 3: DONAS FRITAS', info:'Lección 8: Introducción a las donas fritas.<br>Lección 9: Técnica de preparación paso a pasito.<br>Lección 10: Receta donas fritas elaboradas con polvo de hornear.<br>Lección 11: Receta donas fritas elaboradas con levadura.<br>Lección 12: Errores que debes evitar.', visible: false },
    { titulo: 'MÓDULO 4: DONAS HORNEADAS', info:'Lección 13: Introducción a las donas horneadas.<br>Lección 14: Técnica de preparación paso a pasito.<br>Lección 15: Receta donas de vainilla.<br>Lección 16: Receta donas de chocolate.<br>Lección 17: Receta donas de canela.<br>Lección 18: Receta donas de jarabe de arce.<br>Lección 19: Receta donas con sidra de manzana.<br>Lección 20: Receta donas red velvet.<br>Lección 21: Receta donas de Nutella.<br>Lección 22: Receta donas de nuez.<br>Lección 23: Receta donas de plátano.<br>Lección 24: Receta donas de coco.<br>Lección 25: Receta donas de manzana.<br>Lección 26: Receta donas de choco chip.<br>Lección 27: Receta donas de matcha.<br>Lección 28: Receta donas de naranja.<br>Lección 29: Receta donas de limón.<br>Lección 30: Receta donas de moka.<br>Lección 31: Receta donas veganas de almendras.<br>Lección 32: Receta donas veganas de coco.<br>Lección 33: Errores que debes evitar.', visible: false },
    { titulo: 'MÓDULO 5: MINI DONAS ELABORADAS EN MÁQUINA ELÉCTRICA', info:'Lección 34: Introducción a las donas elaboradas en máquina eléctrica.<br>Lección 35: Técnica de preparación paso a pasito.<br>Lección 36: Receta donas de vainilla.<br>Lección 37: Receta donas de chocolate.<br>Lección 38: Receta donas de canela.<br>Lección 39: Receta donas de rompope.<br>Lección 40: Receta donas de nuez.<br>Lección 41: Receta donas de maple.<br>Lección 42: Receta donas de café.<br>Lección 43: Receta donas de manzana.<br>Lección 44: Receta donas de leche condensada.<br>Lección 45: Receta donas de Nutella.<br>Lección 46: Receta donas de coco.<br>Lección 47: Receta donas de miel.<br>Lección 48: Receta donas de almendras.<br>Lección 49: Receta donas de choco chip.<br>Lección 50: Receta donas de moka.<br>Lección 51: Receta donas veganas de almendras.<br>Lección 52: Receta donas veganas de manzana.<br>Lección 53: Receta donas veganas de coco.<br>Lección 54: Receta donas veganas de chocolate.<br>Lección 55: Receta donas veganas de jarabe de arce.<br>Lección 56: Errores que debes evitar.', visible: false},
    { titulo: 'MÓDULO 6: CÓMO DECORAR DONAS Y MINI DONAS', info:'Lección 57: El glaseado y decorado<br>Lección 58: Técnica para glasear paso a pasito.<br>Lección 59: Receta de glaseado de vainilla.<br>Lección 60: Receta de glaseado de chocolate.<br>Lección 61: Receta de glaseado de coco.<br>Lección 62: Receta de glaseado de canela.<br>Lección 63: Receta de glaseado de moka.<br>Lección 64: Receta de glaseado de cajeta.<br>Lección 65: Receta de glaseado de sidra de manzana.<br>Lección 66: Receta de glaseado de Nutella.<br>Lección 67: Receta de glaseado de chocolate semi dulce.<br>Lección 68: Receta de glaseado de jarabe de arce.<br>Lección 69: Receta de glaseado de fresa.<br>Lección 70: Receta de glaseado de café.<br>Lección 71: Receta de glaseado de limón.<br>Lección 72: Receta de glaseado de manzana.<br>Lección 73: Receta de glaseado de matcha.<br>Lección 74: Receta de glaseado de rompope.<br>Lección 75: Receta de glaseado de queso crema.<br>Lección 76: Receta de glaseado de maple.<br>Lección 77: Ideas de toppings para decorar.', visible: false },
  ];
  contenidos2 = [
    { titulo: 'MÓDULO 7: EMPRENDE DESDE CASA', info:'Lección 78: Un poco de historia.<br>Lección 79: Es hora de contar tu propia historia.<br>Lección 80: Hábitos para trabajar desde casa.<br>Lección 81: Tu espacio de trabajo.<br>Lección 82: Equipo y utensilios.', visible: false },
    { titulo: 'MÓDULO 8: DISEÑA TUS MINI DONAS Y DESARROLLA TU MARCA', info:'Lección 83: Estudio de mercado.<br>Lección 84: Diseña tus mini donas.<br>Lección 85: Desarrolla tu marca.', visible: false },
    { titulo: 'MÓDULO 9: PROVEEDORES, PRESENTACIÓN Y EMPAQUE', info:'Lección 86: Cómo elegir proveedores.<br>Lección 87: Presentación y empaque.<br>Lección 88: Gestión de entregas.', visible: false },
    { titulo: 'MÓDULO 10: ESTABLECE EL PRECIO DE VENTA', info:'Lección 89: Cómo calcular el precio de venta de tus mini donas.<br>Lección 90: Toma en cuenta a la competencia<br>Lección 91: Precios justos y competitivos', visible: false },
    { titulo: 'MÓDULO 11: ELABORA UN CATÁLOGO IRRESISTIBLE', info:'Lección 92: Cómo hacer un catálogo irresistible.<br>Lección 93: Sugerencias para tomar las fotos.', visible: false },
    { titulo: 'MÓDULO 12: MARKETING Y PUBLICIDAD', info:'Lección 94: Estrategias publicitarias.<br>Lección 95: Si otros pueden, tú también puedes.<br>Lección 96: Fin de este delicioso viaje.', visible: false },
  ];
  contenidos3 = [
    { titulo: 'BONO #1 DE REGALO. Cómo elegir la mejor máquina para ti.', info:'<strong>Guía para decidir qué máquina comprar</strong><br>*Características de las máquinas eléctricas para hacer donitas<br>*Criterios de elección<br>*Marcas recomendadas<br>*Mi sugerencia<br><strong>TOTALMENTE GRATIS EL DIA DE HOY</strong>', visible: false },
  ];
  contenidos4 = [
    { titulo: 'BONO #2 DE REGALO. Calcula el precio de tus donitas fácilmente.', info:'<strong>Plantilla editable en Excel para calcular costos</strong><br>*Guía en Excel para calcular el precio de venta de tus Mini Donas que podrás editar para hacer tus propios calculos.<br><strong>TOTALMENTE GRATIS EL DIA DE HOY</strong>', visible: false },
  ];

  toggleContenido1(index: number) {
    this.contenidos1[index].visible = !this.contenidos1[index].visible;
  }
  toggleContenido2(index: number) {
    this.contenidos2[index].visible = !this.contenidos2[index].visible;
  }
  toggleContenido3(index: number) {
    this.contenidos3[index].visible = !this.contenidos3[index].visible;
  }
  toggleContenido4(index: number) {
    this.contenidos4[index].visible = !this.contenidos4[index].visible;
  }
}

