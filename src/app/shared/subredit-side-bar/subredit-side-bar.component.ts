import { SubredditService } from './../../subreddit/subreddit.service';
import { SubredditModel } from './../../subreddit/SubredditModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subredit-side-bar',
  templateUrl: './subredit-side-bar.component.html',
  styleUrls: ['./subredit-side-bar.component.css']
})
export class SubreditSideBarComponent implements OnInit {

  
  subreddits: Array<SubredditModel> = [];

  constructor(private subredditService: SubredditService) { }

  ngOnInit(): void {
    this.subredditService.getAllSubreddits().subscribe(data => {
      this.subreddits = data;
    });
  }

}
