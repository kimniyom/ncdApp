import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'form', loadChildren: './pages/form/form.module#FormPageModule' },
  { path: 'page1', loadChildren: './pages/page1/page1.module#Page1PageModule' },
  { path: 'page2', loadChildren: './pages/page2/page2.module#Page2PageModule' },
  { path: 'page3', loadChildren: './pages/page3/page3.module#Page3PageModule' },
  { path: 'page4', loadChildren: './pages/page4/page4.module#Page4PageModule' },  { path: 'page5', loadChildren: './pages/page5/page5.module#Page5PageModule' },
  { path: 'page6', loadChildren: './pages/page6/page6.module#Page6PageModule' },
  { path: 'page7', loadChildren: './pages/page7/page7.module#Page7PageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
