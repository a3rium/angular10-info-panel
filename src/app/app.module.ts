import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

import { InfoPanelComponent } from './info-panel/info-panel.component';
import { InsightsTabComponent } from './insights-tab/insights-tab.component';
import { AiSummaryComponent } from './ai-summary/ai-summary.component';
import { AiRepliesComponent } from './ai-replies/ai-replies.component';
import { AgentSummaryComponent } from './agent-summary/agent-summary.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { RatingSliderComponent } from './rating-slider/rating-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoPanelComponent,
    InsightsTabComponent,
    AiSummaryComponent,
    AiRepliesComponent,
    AgentSummaryComponent,
    RecommendationsComponent,
    RatingSliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
