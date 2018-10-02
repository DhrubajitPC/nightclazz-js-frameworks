import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent implements OnInit {

  public isLiked = true;
  @Input() public nbLike: number;

  constructor() { }

  ngOnInit() {
  }

  public toggleIsLiked() {
    this.isLiked = !this.isLiked;
  }
}
