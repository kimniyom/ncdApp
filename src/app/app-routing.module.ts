import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomePageModule' },
  { path: 'form', loadChildren: './pages/form/form.module#FormPageModule' },
  { path: 'page1', loadChildren: './pages/page1/page1.module#Page1PageModule' },
  { path: 'page2', loadChildren: './pages/page2/page2.module#Page2PageModule' },
  { path: 'page3', loadChildren: './pages/page3/page3.module#Page3PageModule' },
  { path: 'page4', loadChildren: './pages/page4/page4.module#Page4PageModule' },
  { path: 'page5', loadChildren: './pages/page5/page5.module#Page5PageModule' },
  { path: 'page6', loadChildren: './pages/page6/page6.module#Page6PageModule' },
  { path: 'page7', loadChildren: './pages/page7/page7.module#Page7PageModule' },
  { path: 'group2', loadChildren: './pages/group2/group2.module#Group2PageModule' },
  { path: 'lastform', loadChildren: './pages/lastform/lastform.module#LastformPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'page8', loadChildren: './pages/page8/page8.module#Page8PageModule' },
  { path: 'page9', loadChildren: './pages/page9/page9.module#Page9PageModule' },
  { path: 'page10', loadChildren: './pages/page10/page10.module#Page10PageModule' },
  { path: 'page11', loadChildren: './pages/page11/page11.module#Page11PageModule' },
  { path: 'success', loadChildren: './pages/success/success.module#SuccessPageModule' },
  { path: 'formuladm', loadChildren: './pages/formuladm/formuladm.module#FormuladmPageModule' },
  { path: 'formularht', loadChildren: './pages/formularht/formularht.module#FormularhtPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
