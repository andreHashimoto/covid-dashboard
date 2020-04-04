import { Component, OnInit, ViewChild, ElementRef, OnDestroy, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, BaseChartDirective } from 'ng2-charts';
import { ActivatedRoute } from '@angular/router';
import { CovidApiService } from '../service/covid-api.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent implements OnInit, OnDestroy {

  @Input() cdata: string;
  @ViewChild(BaseChartDirective, {static: true}) chart: BaseChartDirective;
  
  lineChartData: ChartDataSets[] = [{ data: [], label: 'Covid' }];
  lineChartLabels: Label[] = [];
  lineChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        type: 'linear'
      }]
    }
  };
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  countries = []
  countriesData = []
  selectedCountry = null

  constructor(private covidApiService: CovidApiService,
    private route: ActivatedRoute,
    private elementRef: ElementRef) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   console.log(params['params'].data)
    //   this.getCovidData(params['params'].data)
    // });
    this.getCovidData()
  }

  getDataSetFromJSON = (newDeaths) => {
    const countryData = {
      date: []
    }
    newDeaths.forEach(day => {
      for (const country in day) {
        if (country == 'date') {
          countryData['date'].push(day[country])
          continue
        }

        const deaths = day[country] ? +day[country] : 0
        if (!countryData.hasOwnProperty(country)) {
          countryData[country] = [deaths]
        } else {
          countryData[country].push(deaths)
        }
      }
    })

    return countryData
  }

  getCovidData() {
    console.log(this.cdata)
    this.covidApiService.getCovidData(this.cdata).subscribe(newDeaths => {
      const countryObj = this.getDataSetFromJSON(newDeaths)
      this.lineChartData = []
      this.lineChartLabels.length = 0;
      this.lineChartLabels = countryObj['date']
      
      for (const country in countryObj) {
        const color = `rgba(${Math.random()*256|0}, ${Math.random()*256|0}, ${Math.random()*256|0}, 0.8)`
        if (!['date'].includes(country)) {
          this.countries.push(country)
          this.countriesData.push({
            data: countryObj[country],
            label: country,
            fill: false,
            backgroundColor: color,
            borderColor: color
            // hidden: true
          })
        }
        
      }
    })
  }

  addCountry() {
    const data = this.countriesData.find(cd => cd.label == this.selectedCountry)
    this.lineChartData.push(data)
    this.countries.splice(this.countries.indexOf(this.selectedCountry), 1)
    this.selectedCountry = null
  }


  changeScale(event) {
    console.log(this.cdata)
    this.chart.chart.config.options.scales.yAxes[0].type = event.target.value
    this.chart.chart.update()
  }

  ngOnDestroy() {
    console.log('destroy!')
    this.elementRef.nativeElement.remove();
  }

}