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
  btnelement:any;
  btnRadio=true;
  getdt = new Subject<any>()
  enabled= true;
  volumen:number = 0.5;
  constructor() { }
  ngOnInit(): void {
   
    this.getdt.asObservable().subscribe((data:HTMLAudioElement) =>{

    })
  }
  ngAfterViewInit() {
    // let poops = setInterval(()=>{
    //   if(this.audioref.nativeElement){
    //       console.log("BTN PLAY") 
    //       this.playRadio()
    //       clearInterval(poops);
    //   }
    // }, 1000);
    // this.audioref.nativeElement.addEventListener('canplay',(ev)=>{
    //   console.log("EVENT",ev);
    //   this.btnplay.nativeElement.disabled = false
    // })    
  }
  playRadio(){    
    this.btnRadio = false; 
    const radio = this.audioref.nativeElement   
    radio.play()
   
  }
  stopRadio(){
    this.audioref.nativeElement.pause();
    this.btnRadio = true;
  }
}
