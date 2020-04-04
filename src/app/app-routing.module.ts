import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { NewDeathsComponent } from './new-deaths/new-deaths.component';
import { TotalDeathsComponent } from './total-deaths/total-deaths.component';
import { NewCasesComponent } from './new-cases/new-cases.component';
import { TotalCasesComponent } from './total-cases/total-cases.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'new-deaths' },
  { path: 'new-deaths', component: NewDeathsComponent },
  { path: 'new-cases', component: NewCasesComponent },
  { path: 'total-cases', component: TotalCasesComponent },
  { path: 'total-deaths', component: TotalDeathsComponent },
  { path: 'line-chart', component: LineChartComponent },
  { path: 'bar-chart', component: BarChartComponent },
  { path: 'doughnut-chart', component: DoughnutChartComponent },
  { path: 'radar-chart', component: RadarChartComponent },
  { path: 'pie-chart', component: PieChartComponent },
  { path: 'bubble-chart', component: BubbleChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
