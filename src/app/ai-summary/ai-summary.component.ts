import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ai-summary',
  templateUrl: './ai-summary.component.html',
  styleUrls: ['./ai-summary.component.css'],
})
export class AiSummaryComponent implements OnInit {
  @Input() aiSummary!: string;
  constructor() {}

  ngOnInit(): void {}
}
