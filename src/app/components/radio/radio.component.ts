import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements AfterViewInit, OnInit {
  @ViewChild('audioref') audioref:ElementRef<HTMLAudioElement>
  @ViewChild('btnplay') btnplay:ElementRef<HTMLButtonElement>
  btnRadio=true;
  getdt = new Subject<any>()
  enabled= true;
  volumen:number = 0.5;
  constructor() { }
  ngOnInit(): void {
    this.getdt.asObservable().subscribe((data:HTMLAudioElement) =>{

    })
  }
  async ngAfterViewInit() {
    
    this.getdt.next(this.audioref.nativeElement);
    await this.playRadio()
    this.btnRadio = false;
    // let poops = setInterval(()=>{
    //   if(document.getElementById('btnplay')){
    //       console.log("BTN PLAY")
          
    //       clearInterval(poops);                    
    //   }
    // }, 100);
    // this.audioref.nativeElement.addEventListener('canplay',(ev)=>{
    //   console.log("EVENT",ev);
    //   this.btnplay.nativeElement.disabled = false
    // })    
  }
  playRadio(){    
   return this.audioref.nativeElement.play()    
  }
  stopRadio(){
    this.audioref.nativeElement.pause();
    this.btnRadio = true;
  }
}
