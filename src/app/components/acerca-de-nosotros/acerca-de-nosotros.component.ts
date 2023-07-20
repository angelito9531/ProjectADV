import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de-nosotros',
  templateUrl: './acerca-de-nosotros.component.html',
  styleUrls: ['./acerca-de-nosotros.component.css']
})
export class AcercaDeNosotrosComponent implements OnInit {
  texto:string[]= ["Somos un pequeño ministerio, que anunciamos las buenas nuevas del Señor y Salvador Jesucristo, hasta donde Dios nos permita. Siendo que Él manda y dice: Y yendo, predicad, diciendo: El reino de los cielos se ha acercado. San Mateo 10:7",
                   "Este ministerio empezó en Cochabamba Bolivia, en la provincia Capinota en el año 2006; porque fuimos enviados por nuestro apreciado Pastor Fidel Jachacollo. Como Dios dice: ¿Y cómo predicarán si no fueren enviados?... Romanos 10:15a.",
                   "Así emprendimos esta labor Juan Carlos Apaza, Ana Peredo de Apaza y Anabel Apaza. Siendo que escrito está: Y todo esto proviene de Dios, quien nos reconcilió consigo mismo por Cristo, y nos dio el ministerio de la reconciliación; 2ª Corintios 5:18.",
                   "Después, en la ciudad de Santa Cruz, el 20 de mayo del 2007, por la gracia del Señor fundamos en casa con la presencia de las autoridades de Asamblea de Dios boliviana, la Iglesia Roca y Coronado, la cual estamos pastoreando con el apoyo de los hermanos Cristóbal Cuellar, Benita de Cuellar, y otros hermanos más. Cumpliendo lo que Dios dice: Apacentad la grey de Dios que está entre vosotros, cuidando de ella, no por fuerza, sino voluntariamente; no por ganancia deshonesta, sino con ánimo pronto; 1ª Pedro 5:2.",
                   "El 9 de junio del 2019 iniciamos asamblea de Dios virtual por Facebook, para publicar la salvación de Dios por el internet, y también para unificar nuestras demás redes sociales; con la venia de nuestro Pastor Fidel Jachacollo, a quien el Señor hoy lo tiene en su gloria. Como dijo el salmista: No encubrí tu justicia dentro de mi corazón; he publicado tu fidelidad y tu salvación; no oculté tu misericordia y tu verdad en grande asamblea. Salmo 40:10.",
                  "También el 17 de julio de 2021 en la ciudad de Cochabamba, inauguramos los cultos a domicilio, con miembros de la familia Apaza y parientes; buscando hacer y decir al igual que el siervo del Señor: … pero yo y mi casa serviremos a Jehová. Josué 24:15b",
                   "Y desde junio de 2022, por el favor de Dios, estamos compartiendo el evangelio al mundo por www.asamblea deDiosvirtual.com, con la ayuda de todos cuantos quieran ser parte de este servicio. Porque el Señor dijo: Y será predicado este evangelio del reino en todo el mundo, para testimonio a todas las naciones; y entonces vendrá el fin. San Mateo 24:14."]
  constructor() { }

  ngOnInit(): void {
  }

}
