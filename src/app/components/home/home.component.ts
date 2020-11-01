import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  myInterval = 2000;
  activeSlideIndex = 0;

  slides = [
    {image: 'https://www.softlogicsys.in/wp-content/uploads/2019/07/full-stack-training.jpg'},
    {image: 'https://www.trumplearning.com/wp-content/uploads/2020/01/best-full-stack-web-developer-courses-certification-online.jpg'},
    {image: 'https://www.muycanal.com/wp-content/uploads/2018/04/linux_usuarios.jpg'},
    {image: 'https://robokraft.com/wp-content/uploads/2018/08/Mean-stack.jpg'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
