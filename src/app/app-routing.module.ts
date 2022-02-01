import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/intro',
    pathMatch: 'full'
  },
 
  {
    path: 'home-page',
    loadChildren: () => import('./pages/home-page/home-page.module').then( m => m.HomePagePageModule)
  },
  {
    path: 'news-page',
    loadChildren: () => import('./pages/news/news-page/news-page.module').then( m => m.NewsPagePageModule)
  },
  {
    path: 'weather-page',
    loadChildren: () => import('./pages/weather-page/weather-page.module').then( m => m.WeatherPagePageModule)
  },
  {
    path: 'profile-page',
    loadChildren: () => import('./pages/profile-page/profile-page.module').then( m => m.ProfilePagePageModule)
  },
  
  {
    path: 'auth-page',
    loadChildren: () => import('./auth/auth-page/auth-page.module').then( m => m.AuthPagePageModule)
  },
  {
    path: 'sign-in-page',
    loadChildren: () => import('./auth/sign-in-page/sign-in-page.module').then( m => m.SignInPagePageModule)
  },
  {
    path: 'sign-up-page',
    loadChildren: () => import('./auth/sign-up-page/sign-up-page.module').then( m => m.SignUpPagePageModule)
  },
  {
    path: 'news-details/:id',
    loadChildren: () => import('./pages/news/news-details/news-details.module').then( m => m.NewsDetailsPageModule)
  },
  {
    path: 'treatment',
    loadChildren: () => import('./pages/treatment/treatment.module').then( m => m.TreatmentPageModule)
  },
   {
    path: 'treatment-details/:id',
    loadChildren: () => import('./pages/treatment/treatment-details/treatment-details.module').then( m => m.TreatmentDetailsPageModule)
  },
  {
    path: 'fertilizer',
    loadChildren: () => import('./pages/fertilizer/fertilizer.module').then( m => m.FertilizerPageModule)
  },
  {
    path: 'fertilizer-details/:id',
    loadChildren: () => import('./pages/fertilizer/fertilizer-details/fertilizer-details.module').then( m => m.FertilizerDetailsPageModule)
  },
  {
    path: 'pesticide-details/:id',
    loadChildren: () => import('./pages/pesticides/pesticide-details/pesticide-details.module').then( m => m.PesticideDetailsPageModule)
  },
  {

    path: 'comments',
    loadChildren: () => import('./pages/news/comments/comments.module').then( m => m.CommentsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./model/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'experts',
    loadChildren: () => import('./pages/experts/experts.module').then( m => m.ExpertsPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'pesticides',
    loadChildren: () => import('./pages/pesticides/pesticides.module').then( m => m.PesticidesPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
