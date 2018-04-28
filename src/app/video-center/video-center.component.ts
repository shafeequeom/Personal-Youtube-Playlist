import { Video } from './../video';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  videos: Video[] = [
    {"_id":"1","title":"Title 1", "url": "url 1", "discription": "desc 1"},
    {"_id":"2","title":"Title 2", "url": "url 2", "discription": "desc 2"},
    {"_id":"3","title":"Title 3", "url": "url 3", "discription": "desc 3"},
    {"_id":"4","title":"Title 4", "url": "url 4", "discription": "desc 4"}
  ];

  selectedVideo: Video;

  constructor() { }

  ngOnInit() {
  }
  onSelectVideo(video:any){
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }
}
