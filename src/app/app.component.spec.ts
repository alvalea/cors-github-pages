import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { HelloService } from './hello.service';
import { asyncData } from './testing/async-observable-helpers';

describe('AppComponent', () => {
  let helloServiceSpy: jasmine.SpyObj<HelloService>;

  beforeEach(async () => {
    helloServiceSpy = jasmine.createSpyObj('HelloService', ['hello']);
    helloServiceSpy.hello.and.returnValue(asyncData('test'));

    await TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [ {provide: HelloService, useValue: helloServiceSpy}]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-example'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ng-example');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('ng-example');
  });
});
