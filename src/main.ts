import {
  Component,
  OnInit,
  Inject,
  ViewEncapsulation,
  ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import { ActionId } from 'devexpress-reporting/dx-webdocumentviewer'

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  DxDataGridComponent,
  DxDataGridModule,
  DxSelectBoxModule,
  DxCheckBoxModule,
} from 'devextreme-angular';

import { AppComponent } from '../report.component';

//import { ActionId } from 'devexpress-reporting/dx-reportdesigner'

import { DxReportViewerComponent } from 'devexpress-reporting-angular';

import { DxReportDesignerComponent } from 'devexpress-reporting-angular';
import { ActionId } from 'devexpress-reporting/dx-reportdesigner';

//import { DxReportViewerModule } from '@devexpress/dx-angular-report-viewer';

import {
  DxReportViewerModule,
  DxReportDesignerModule,
} from 'devexpress-reporting-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DxReportViewerModule, DxReportDesignerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class ReportComponent implements OnInit {
  @ViewChild(DxReportDesignerComponent, { static: false })
  designer: DxReportDesignerComponent;
  getDesignerModelAction = 'DXXRD/GetDesignerModel';
  // Variable para almacenar la URL del GET





  // Objeto para almacenar los parámetros del GET
  params = {
    dateini: '2022-01-01',
    datefin: '2023-11-30',
    columns: [
      'customer',
      'country',
      'provider',
      'category',
      'variety',
      'color',
    ],
    value: 'stems',
  };

  // Variable para almacenar los datos del reporte
  data: any[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}



  //    print() {
  //      this.viewer.bindingSender.Print();
  //  }
}
