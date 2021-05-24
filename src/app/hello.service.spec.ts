import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { HelloService } from './hello.service';
import { asyncData } from './testing/async-observable-helpers';


describe('HelloService', () => {
  let helloService: HelloService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    httpClientSpy.get.and.returnValue(asyncData('test'));
  
    TestBed.configureTestingModule({
      providers: [
        HelloService,
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
    helloService = TestBed.inject(HelloService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(helloService).toBeTruthy();
  });

  it('should return test', () => {
    helloService.hello().subscribe(
        response => expect(response).toEqual('test')
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
