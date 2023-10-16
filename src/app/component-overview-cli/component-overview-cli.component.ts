import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-component-overview-cli',
    templateUrl: './component-overview-cli.component.html',
    styleUrls: ['./component-overview-cli.component.scss']
})
export class ComponentOverviewCliComponent {
    title = 'hello-world';
    constructor(private router: Router) { }
    navigateToRoute(route: string) {
        alert('next')
        this.router.navigate([route]);
    }    
}
