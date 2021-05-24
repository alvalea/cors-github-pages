import { Component } from '@angular/core';

import { HelloService } from './hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'ng-example';

  constructor(private helloService: HelloService) { }

  ngOnInit() {
    this.helloService.hello().
	subscribe(title =>
		this.title = title);
  }
}
