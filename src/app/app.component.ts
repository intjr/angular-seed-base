/* tslint:disable:forin member-ordering */

import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

/**
 * Giant grab bag of stuff to drive the chapter
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit, OnInit {
  username = 'semlinker';
  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}



/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/