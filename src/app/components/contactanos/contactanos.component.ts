import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {
  focus: any;
  focus1: any;
  textoApoyarnos:string[] =[`Si quieres apoyarnos, podrás hacerlo asiéndote miembro activo, miembro pasivo o también simpatizante, de este ministerio.`,
  `Así podrás apoyarnos con tu conocimiento bíblico, musical, tecnológico y sobre todo con tus oraciones y ayunos.`,
  "Y también podrás apoyarnos con donaciones y ofrendas a la medida de tus posibilidades.",
  `Comunícanos este tu sentir a nuestro WhatsApp o celular (+591) 72 72 00 00. O también puedes escribirnos a nuestro correo AsambleadeDiosVirtual@gmail.com`,
  `Siendo que la Biblia nos dice: Porque Dios es el que en vosotros produce así el querer como el hacer, por su buena voluntad. Filipenses 2:13.
  Y que Dios nos bendiga. Amén.`
] 
  
  constructor() { }

  ngOnInit(): void {
  }

}
