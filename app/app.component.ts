import {Component} from '@angular/core';
import {SumService} from './app.sumservice';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Ma superb app';

sum:any;

constructor(private sumService: SumService) { }

 Calculate(a:any, b:any) 
  {
      //this.sum= +a + +b;
      this.sum=this.sumService.getSum(a,b);
  }


}
