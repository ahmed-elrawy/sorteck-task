import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'resorces',
    pathMatch: 'full',
  },
 
  {
    path: 'resorces',
    loadChildren: () =>
      import('./features/resources/resources.module').then(
        (m) => m.ResourcesModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
