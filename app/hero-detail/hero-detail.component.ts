import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Hero } from '../hero/hero';
import { HeroService } from '../hero.service/hero.service';

@Component({
  selector: 'my-hero-detail',
  styleUrls: ['app/hero-detail/hero-detail.component.css'],
  templateUrl: 'app/hero-detail/hero-detail.component.html'

})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.heroService.getHero(id)
      .then(hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }

}
