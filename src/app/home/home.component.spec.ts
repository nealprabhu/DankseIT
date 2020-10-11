// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import {
//   MockBackend
// } from '@angular/http/testing';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// import { HomeComponent } from './home.component';

// describe('HomeComponent', () => {
//   let component: HomeComponent;
//   let fixture: ComponentFixture<HomeComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [ HomeComponent ,HttpClientTestingModule],
//       providers:[{provide: HomeComponent, useValue: true}]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HomeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', async(() => {
//     const fixture = TestBed.createComponent(HomeComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   }));

// //  xit("should call getData", () => {
// //     const spy = spyOn(component, "enableDescription");
// //     component.enableDescription(1);
// //     fixture = TestBed.createComponent(HomeComponent);
// //     component = fixture.componentInstance;
// //     fixture.detectChanges();
// //     let userservice  =  fixture.debugElement.injector.get(HomeComponent);
// //     // component.getData().subscribe(data =>{
// //     //    expect(data.data).toEqual()
// //     // })
// //     expect(userservice.getData).toHaveBeenCalled();
// //     expect(component.enableDescription(2)).toHaveBeenCalled();
// //     let app = fixture.debugElement.componentInstance;
// //     expect(app.enableDescription(1)).toHaveBeenCalled();
// //     expect(component.enableDescription(1)).toHaveBeenCalled();
// //   });
// });

import {​​​​ TestBed, async }​​​​ from '@angular/core/testing';

 import {​​​​ RouterTestingModule }​​​​ from '@angular/router/testing';

 import {​​​​ BrowserAnimationsModule }​​​​ from '@angular/platform-browser/animations';

 import {​​​​ BrowserModule, By }​​​​ from '@angular/platform-browser';

 import {​​​​ FormsModule, ReactiveFormsModule }​​​​ from '@angular/forms';

 import {​​​​ HttpClientModule,HttpClient}​​​​ from '@angular/common/http';

 import { HttpTestingController } from  '@angular/common/http/testing';

 import {​​​​ of, throwError }​​​​ from 'rxjs';
 
import { HomeComponent } from './home.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';


 describe('HomeComponent', () => {​​​​

   beforeEach(() => {​​​​

     TestBed.configureTestingModule({​​​​

       imports: [

         RouterTestingModule,

         BrowserModule,

         BrowserAnimationsModule,

         FormsModule,

         ReactiveFormsModule,
         NgbNavModule,

         HttpClientModule,


       ],

       declarations: [

         HomeComponent,

       ],

       providers: [

         {​​​​ provide: HomeComponent, useValue: true }​​​​

       ]

     }​​​​).compileComponents();

     const fixture = TestBed.createComponent(HomeComponent);

     const component = fixture.debugElement.componentInstance;
     fixture.detectChanges();

   }​​​​);

   it('should create the FacilitiesComponent', async(() => {​​​​

    const fixture = TestBed.createComponent(HomeComponent);

    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();

  }​​​​));

  it('should create the FacilitiesComponent', async(() => {​​​​

    const fixture = TestBed.createComponent(HomeComponent);

    const app = fixture.debugElement.componentInstance;

    expect(app.enableDescription(1));

  }​​​​));

  }​​​​);