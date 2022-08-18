import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SpinerComponent } from './spiner/spiner.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ButtonsComponent } from './buttons/buttons.component';
import {MatMenuModule} from '@angular/material/menu';
import { MenuComponent } from './menu/menu.component';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './card/card.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {MatTooltipModule} from '@angular/material/tooltip';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SpinerComponent,
    ButtonsComponent,
    MenuComponent,
    CardComponent,
    ButtonToggleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatButtonToggleModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
