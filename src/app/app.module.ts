import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './components/inicio/inicio.component';
import { WelcomeComponent } from './components/inicio/welcome/welcome.component';
import { CadenaLargaComponent } from './components/inicio/cadena-larga/cadena-larga.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GenerateRandomComponent } from './components/inicio/cadena-larga/generate-random/generate-random.component';
import { ProcessFileComponent } from './components/inicio/cadena-larga/process-file/process-file.component';
import { ManualInputComponent } from './components/inicio/cadena-larga/manual-input/manual-input.component';
import { ArrayListComponent } from './components/inicio/cadena-larga/shared/array-list/array-list.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoComponent } from './components/inicio/info/info.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    WelcomeComponent,
    CadenaLargaComponent,
    GenerateRandomComponent,
    ProcessFileComponent,
    ManualInputComponent,
    ArrayListComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    HighlightModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
