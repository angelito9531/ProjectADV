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
  ngAfterViewInit(): void {
    this.getdt.next(this.audioref.nativeElement);
    this.audioref.nativeElement.addEventListener('canplay',(ev)=>{
      console.log("EVENT",ev);      
      this.btnplay.nativeElement.disabled = false
      this.playRadio();
    })
  }
  playRadio(){
    this.audioref.nativeElement.play();
    this.btnRadio = false;
  }
  stopRadio(){
    this.audioref.nativeElement.pause();
    this.btnRadio = true;
  }
}
