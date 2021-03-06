import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./user-shell/user-shell.module').then((m) => m.UserShellModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./user-shell/user-shell.module').then((m) => m.UserShellModule),
  },
  {
    path: 'enter',
    loadChildren: () =>
      import('./enter/enter.module').then((m) => m.EnterModule),
  },
  {
    path: 'faq',
    loadChildren: () => import('./user-shell/user-shell.module').then((m) => m.UserShellModule),
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./user-shell/user-shell.module').then((m) => m.UserShellModule),
  },
  {
    path: 'magazine',
    loadChildren: () =>
      import('./user-shell/user-shell.module').then((m) => m.UserShellModule),
  },
  {
    path: 'magazine-viewer',
    loadChildren: () =>
      import('./user-shell/user-shell.module').then(
        (m) => m.UserShellModule
      ),
  },
  {
    path: 'memo',
    loadChildren: () =>
      import('./user-shell/user-shell.module').then((m) => m.UserShellModule),
  },
  {
    path: '404',
    loadChildren: () =>
      import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
  {
    path: 'privacy',
    loadChildren: () =>
      import('./user-shell/user-shell.module').then((m) => m.UserShellModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./search/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'terms',
    loadChildren: () =>
      import('./user-shell/user-shell.module').then((m) => m.UserShellModule),
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./user-shell/user-shell.module').then((m) => m.UserShellModule),
  },
  {
    path: 'transaction-law',
    loadChildren: () =>
      import('./user-shell/user-shell.module').then(
        (m) => m.UserShellModule
      ),
  },
  {
    path: 'user',
    loadChildren: () => import('./user-shell/user-shell.module').then((m) => m.UserShellModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./user-shell/user-shell.module').then((m) => m.UserShellModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled', // 画面表示時のアンカーリンクを有効にする
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
