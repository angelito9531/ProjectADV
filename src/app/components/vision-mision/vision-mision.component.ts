import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vision-mision',
  templateUrl: './vision-mision.component.html',
  styleUrls: ['./vision-mision.component.css']
})
export class VisionMisionComponent implements OnInit {
  mision:string[] = [`
  1.	Obedecer a lo que manda nuestro Señor y Salvador Jesucristo. Porque Él dijo: Id por todo el mundo y predicad el evangelio a toda criatura. San Marcos 16:15.`,

  "2.	Buscar hacer discípulos que guarden las enseñanzas de nuestro Maestro.  Porque Él nos manda y dice: Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo; enseñándoles que guarden todas las cosas que os he mandado; y he aquí yo estoy con vosotros todos los días, hasta el fin del mundo. Amén. San Mateo 28:19-20.",
  
  "3.	Predicar el evangelio del reino, hasta donde Dios nos permita. Porque nuestro Señor profetizando dijo: Y será predicado este evangelio del reino en todo el mundo, para testimonio a todas las naciones; y entonces vendrá el fin.  San Mateo 24:14."
  ]
  vision:string[]= [
    "1.	Anunciar las buenas nuevas de salvación de Dios al mundo. Porque Dios nos dice: Mirad a mí, y sed salvos, todos los términos de la tierra, porque yo soy Dios, y no hay más. Isaías 45:22.",
    "2.	Vivir en el cumplimiento de las palabras de Dios que dijo: En aquel tiempo los sordos oirán las palabras del libro, y los ojos de los ciegos verán en medio de la oscuridad y de las tinieblas. Isaías 29:18. ",
    "3. Alcanzar a los que no ven la sanidad de Dios. Porque escrito está: Dijo Jesús: Para juicio he venido yo a este mundo; para que los que no ven, vean, y los que ven, sean cegados. San Juan 9:39"
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
