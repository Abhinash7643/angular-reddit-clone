import { PostModel } from './../PostModel';
import { Component, OnInit, Input } from '@angular/core';
import { faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input() data: Array<PostModel>;
  faComments = faComments;

  constructor() { }

  ngOnInit(): void {
  }

}
