import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentOverviewCliComponent } from './component-overview-cli/component-overview-cli.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'about', component: ComponentOverviewCliComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        ComponentOverviewCliComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [RouterModule]
})
export class AppModule { }
