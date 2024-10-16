import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BloggerService } from '../blogger.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  constructor(private bloggerservice: BloggerService) {

  }
  ngOnInit(): void {
    
  }
}
