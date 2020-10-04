import { CreatePostRequest } from './../post/CreatePostRequest';
import { PostModel } from './PostModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Array<PostModel>> {
    return this.http.get<Array<PostModel>>('http://localhost:8080/api/posts/');
  }

  createPost(postPayload: CreatePostRequest): Observable<any> {
    return this.http.post('http://localhost:8080/api/posts/', postPayload);
  }
}
