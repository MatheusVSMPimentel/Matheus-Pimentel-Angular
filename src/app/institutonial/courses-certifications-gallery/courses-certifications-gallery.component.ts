import { Component } from '@angular/core';



@Component({
  selector: 'app-courses-certifications-gallery',
  templateUrl: './courses-certifications-gallery.component.html',
  styles: [
  ]
})


export class CoursesCertificationsGalleryComponent  {
  institutionFilter: string  ='q';
  typeFilter : string = '*';
  
  ButtonSelectorFilter( IdName: Event){
  const portfolio = document.querySelector('#portfolio') ?? new Element();
  const portfolioview = document.querySelector('#portfolio-view') ?? new Element();
    if (IdName === null)
    return;
    if( IdName.target === null)
    return;
    const target = IdName.target as HTMLElement;
    console.log(this.institutionFilter);
    this.institutionFilter = target.getAttribute('filter-Institution') ?? this.institutionFilter;
    this.typeFilter = target.getAttribute('filter-type') ?? this.typeFilter;
    
    portfolioview
    
    /* portfolio.addEventListener('click', (th: Element)=>{
      portfolio.classList.remove('active');
      var test = this;
    }); */
  
    /* $('.portfolio-menu ul li').click(function( ){
      $('.portfolio-menu ul li').removeClass('active');
      test
      $(this).addClass('active');
      
      var selector = $(this).attr('data-filter');
      $('.portfolio-item').isotope({
        filter:selector
      });
      return  false;
    }); */
  } 
}
