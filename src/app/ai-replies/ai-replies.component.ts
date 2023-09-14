import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ai-replies',
  templateUrl: './ai-replies.component.html',
  styleUrls: ['./ai-replies.component.css'],
})
export class AiRepliesComponent implements OnInit {
  @Input() aiReplies!: string[];
  constructor() {}

  ngOnInit(): void {}
}
