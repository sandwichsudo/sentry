import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Hero } from '../hero/hero';
import { HeroService } from '../hero.service/hero.service';

@Component({
    selector: 'my-dashboard',
    styleUrls: ['app/dashboard/dashboard.component.css'],
    templateUrl: 'app/dashboard/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    constructor(private router: Router, private heroService: HeroService) { }
    hasIssue(log) {
      return log.priority > -1;
    }
    ngOnInit() {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.filter(this.hasIssue));
    }
    gotoDetail(hero: Hero) {
        let link = ['HeroDetail', { id: hero.id }];
        this.router.navigate(link);
    }

}
