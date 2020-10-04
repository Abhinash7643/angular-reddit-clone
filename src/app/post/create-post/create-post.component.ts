import { SubredditService } from './../../subredit/subreddit.service';
import { PostService } from './../../shared/post.service';
import { SubredditModel } from './../../subredit/SubredditModel';
import { CreatePostRequest } from './../CreatePostRequest';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPostForm: FormGroup;
  postPayload: CreatePostRequest;
  subreddits: Array<SubredditModel>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private postService: PostService,
    private subredditService: SubredditService
  ) {

  }

  ngOnInit(): void {
    // use FormBuilder to create a form group
    this.createPostForm = this.fb.group({
      postName: ['', Validators.required],
      subredditName: ['', Validators.required],
      url: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.subredditService.getAllSubreddits().subscribe((data) => {
      this.subreddits = data;
    }, error => {
      throwError(error);
    });

  }

  createPost() {
    if (this.createPostForm.valid){
      this.postService.createPost(this.createPostForm.value).subscribe((data) => {
        this.router.navigateByUrl('/');
      }, error => {
        throwError(error);
      })
    }
   
  }

  discardPost() {
    this.router.navigateByUrl('/');
  }


}
