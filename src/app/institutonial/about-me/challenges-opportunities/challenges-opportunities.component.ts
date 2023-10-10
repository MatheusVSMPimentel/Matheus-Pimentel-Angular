import { Component, OnInit } from '@angular/core';

function IsInViewport(el: Element | null) :boolean {
  if (el === null){
    return false;
  }

  const rect = el?.getBoundingClientRect();
  
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
async function HideTheRunner(boxWorkaholicImgDiv: Element, boxWorkaholic: Element)
{
  boxWorkaholic.setAttribute("style","visibility: hidden") 
  boxWorkaholicImgDiv.setAttribute("style","visibility: hidden") 
}

async function AnimateRunner (boxWorkaholicImgDiv: Element, boxWorkaholic: Element) 
{
    boxWorkaholic.setAttribute("style","visibility: visible") 
    boxWorkaholicImgDiv.setAttribute("style","visibility: visible")
    boxWorkaholicImgDiv.animate([
      // key frames
      { transform: 'translateX(-100%)', height: 'auto', opacity: 1, display: 'block' },
      { opacity: 1},
      { transform: 'translateX(10%)', opacity: 0.2},
      { transform: 'translateX(10%)', opacity: 0, height: 0 , visibility: 'none'}
    ], {
      // sync options
      duration: 4000,
      easing:"ease-out",
      fill: 'forwards'
    });
    boxWorkaholic.animate([
      // key frames
      { opacity: 0},
      { opacity: 1},
    ], {
      // sync options
      duration: 4155,    
      easing:"ease-in"
    });
}

async function EventScrollAnimate(checkBoxWorkaholic: Element | null, boxWorkaholicImgDiv: Element | null, boxWorkaholic: Element | null, IsShowing: {IsTrue : boolean})
{
  let inViewport;
  const preDiv =  document.querySelector('#message')
  if(checkBoxWorkaholic === null|| boxWorkaholicImgDiv === null || boxWorkaholic === null || preDiv === null){
    return;
  }
  return new Promise(async resolve => {
    document.addEventListener('scroll', async () => {
      inViewport = IsInViewport(checkBoxWorkaholic) || IsInViewport(preDiv);
      if(inViewport && IsShowing.IsTrue === false){
        IsShowing.IsTrue = true;
         resolve(AnimateRunner(boxWorkaholicImgDiv, boxWorkaholic));
      }else if(!inViewport){
        IsShowing.IsTrue = false;
        resolve(HideTheRunner(boxWorkaholicImgDiv,boxWorkaholic))
      }
    });
  });
};


@Component({
  selector: 'app-challenges-opportunities',
  templateUrl: './challenges-opportunities.component.html',
  styleUrls: [ '../about-me.component.css'
  ]
})
export class ChallengesOpportunitiesComponent implements OnInit{
  async ngOnInit(): Promise<void> {
  
    const boxWorkaholicImgDiv = document.querySelector('#workaholic1');
    const boxWorkaholic = document.querySelector('#workaholic');
    const checkBoxWorkaholic = document.querySelector('#workaholicDiv');
    let IsShowing = {IsTrue : false};
    await EventScrollAnimate(checkBoxWorkaholic, boxWorkaholicImgDiv,boxWorkaholic, IsShowing)
    }

}
