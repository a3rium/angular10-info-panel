import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css'],
})
export class RecommendationsComponent implements OnInit {
  @Input() recommendations!: string;
  constructor() {}

  ngOnInit(): void {}
}
