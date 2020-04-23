import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ComponentDirectiveDemoComponent } from './component-directive-demo/component-directive-demo.component';
import { IfDemoComponent } from './if-demo/if-demo.component';
import { ForDemoComponent } from './for-demo/for-demo.component';
import { SwitchDemoComponent } from './switch-demo/switch-demo.component';
import { NgStyleDemoComponent } from './ng-style-demo/ng-style-demo.component';
import { NgClassDemoComponent } from './ng-class-demo/ng-class-demo.component';
import { CustomDirectiveDemoComponent } from './custom-directive-demo/custom-directive-demo.component';
import { HighlighterDirective } from './highlighter.directive';
import { HighLight2Directive } from './high-light2.directive';
import { CustomAttributeDemo2Component } from './custom-attribute-demo2/custom-attribute-demo2.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentDirectiveDemoComponent,
    IfDemoComponent,
    ForDemoComponent,
    SwitchDemoComponent,
    NgStyleDemoComponent,
    NgClassDemoComponent,
    CustomDirectiveDemoComponent,
    HighlighterDirective,
    HighLight2Directive,
    CustomAttributeDemo2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
