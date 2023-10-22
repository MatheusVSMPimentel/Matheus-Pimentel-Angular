import { Component, OnInit } from '@angular/core';

function RocketAnimation(rocketUp: Element){
    
    rocketUp.animate([
      { transform: 'rotate(-18deg) translate(2px, -1px)'},
      { transform: 'rotate(-5deg) translate(-8px, 7px)'},
      { transform: 'translate(2px, -1px) rotate(-18deg)'},
      { transform: 'translate(-8px, 7px) rotate(-5deg)'},
      { transform: 'translate(10px, 6px) rotate(-22deg)'},
      { transform: 'translate(2px, -1px) rotate(-18deg)'}    
    ], {
      // sync options
      duration: 12000,
      easing:"linear",
      iterations: Infinity,
      fill: 'forwards'
    });
    rocketUp.animate([
      // key frames
    ], {
      // sync options
      duration: 500,
      iterations: Infinity,
    });
}


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: [ './about-me.component.css'
  ]
})

export class AboutMeComponent implements OnInit{
  
  
  ngOnInit(): void {
    const rocketUp =  document.querySelector('#rocketUp') ?? new Element();
    RocketAnimation(rocketUp);
  }
}
