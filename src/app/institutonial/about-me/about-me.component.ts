import { Component, OnInit } from '@angular/core';


function isInViewport(el: Element | null) {
  if (el === null){
    return;
  }

  const rect = el?.getBoundingClientRect();
  
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styles: [
  ]
})

export class AboutMeComponent  implements OnInit{

   
  ngOnInit(): void {
    
  
  
  const box = document.querySelector('#workaholic');
  const message = document.querySelector('#message') ?? new Element();
  
  document.addEventListener('scroll', function () {
      const messageText = isInViewport(box) ?
          'The box is visible in the viewport' :
          'The box is not visible in the viewport';
  
      message.textContent = messageText ?? null ;
  
  }, {
      passive: true
  });
  }

}
