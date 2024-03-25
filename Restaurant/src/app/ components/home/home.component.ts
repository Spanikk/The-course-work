import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

interface Item{
  image: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public cardInfo: Item[] = [{
    image: '../../../assets/photo/enhanced.jpg',
    title: '345435',
    description: 'fdg'
  },
    {
      image: '../../../assets/photo/enhanced.jpg',
      title: 'dfgfg',
      description: 'sdfsdf'
    },
    {
      image: '',
      title: '',
      description: ''
    },
    {
      image: '',
      title: '',
      description: ''
    },
    {
      image: '',
      title: '',
      description: ''
    },
    {
      image: '',
      title: '',
      description: ''
    },
    {
      image: '',
      title: '',
      description: ''
    },
    {
      image: '',
      title: '',
      description: ''
    },];

}
