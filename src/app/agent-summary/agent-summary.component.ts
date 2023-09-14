import { Component, OnInit, Input } from '@angular/core';
import { AgentSummary } from '../shared/models/AgentSummary';

@Component({
  selector: 'app-agent-summary',
  templateUrl: './agent-summary.component.html',
  styleUrls: ['./agent-summary.component.css'],
})
export class AgentSummaryComponent implements OnInit {
  @Input() agentSummary!: AgentSummary;
  constructor() {}

  ngOnInit(): void {}
}
