import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from '../app/components/inicio/inicio.component';
import { WelcomeComponent } from '../app/components/inicio/welcome/welcome.component';
import { CadenaLargaComponent } from '../app/components/inicio/cadena-larga/cadena-larga.component';
import { ManualInputComponent } from './components/inicio/cadena-larga/manual-input/manual-input.component';
import { GenerateRandomComponent } from './components/inicio/cadena-larga/generate-random/generate-random.component';
import { ProcessFileComponent } from './components/inicio/cadena-larga/process-file/process-file.component';
import { InfoComponent } from './components/inicio/info/info.component';


const routes: Routes = [{ path: '', redirectTo: '/inicio', pathMatch: 'full' },
{
  path: 'inicio', component: InicioComponent, children: [
    { path: '', component: WelcomeComponent },
    {
      path: 'cadenalarga', component: CadenaLargaComponent, children: [
        { path: 'manual-input', component: ManualInputComponent },
        { path: 'generate-random', component: GenerateRandomComponent },
        { path: 'process-file', component: ProcessFileComponent }
      ]
    },
    { path: 'info', component: InfoComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
