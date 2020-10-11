
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