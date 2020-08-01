import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatSortModule, MatInputModule, MatTabsModule, MatRadioModule, MatCheckboxModule, MatTooltipModule} from '@angular/material';
import {MatSelectModule, MatDatepickerModule,MatNativeDateModule} from '@angular/material';
import {MatButtonModule,MatIconModule} from '@angular/material';
import {MatTableModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material';
import {TextFieldModule} from '@angular/cdk/text-field';
import { MyserviceService } from './myservice.service';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule, MatFormField  } from "@angular/material/form-field";
import { RosterComponent } from './roster/roster.component';
import { ShiftallowanceComponent } from './shiftallowance/shiftallowance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewentryComponent } from './newentry/newentry.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    AppComponent,
    RosterComponent,
    ShiftallowanceComponent, 
    RoutingComponent, NewentryComponent, HomeComponent, EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    TextFieldModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    RouterModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],

  providers: [MyserviceService],
  bootstrap: [AppComponent, RosterComponent]
})
export class AppModule { }
