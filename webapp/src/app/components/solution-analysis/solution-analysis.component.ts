import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SolutionAnalysisService } from 'src/app/services/solution-analysis.service';

@Component({
  selector: 'app-solution-analysis',
  templateUrl: './solution-analysis.component.html',
  styleUrls: ['./solution-analysis.component.css']
})
export class SolutionAnalysisComponent implements OnInit {

  constructor(private service : SolutionAnalysisService) { }

  ngOnInit(): void {
    this.getSolution();
  }

  getSolution(){
    this.service.getSolution().subscribe(data=>{
      console.log(data);
    });
  }
}
