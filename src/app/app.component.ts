import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'ShopWizApp';

  loadedFeature='recipe';
  onNavigate(feature:any){
    this.loadedFeature=feature;
  }

  ngOnInit(): void {
    interval(1000).subscribe(count =>{
      console.log(count)
     
    })
  }
}
//////video 7