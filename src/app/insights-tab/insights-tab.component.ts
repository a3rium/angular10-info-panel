import { Component, OnInit } from '@angular/core';
import data from 'src/app/data/insight.json';
import { InsightData } from '../shared/models/InsightData';

@Component({
  selector: 'app-insights-tab',
  templateUrl: './insights-tab.component.html',
  styleUrls: ['./insights-tab.component.css'],
})
export class InsightsTabComponent implements OnInit {
  insightData: InsightData;
  inputData: string;

  constructor() {}

  ngOnInit(): void {
    this.insightData = data;
    this.inputData = JSON.stringify(this.insightData, null, 2);
  }

  updateInput(value: string) {
    this.inputData = value;
  }

  changeInsightData() {
    console.log(this.inputData);
    if (this.inputData != '') this.insightData = JSON.parse(this.inputData);
  }
}
