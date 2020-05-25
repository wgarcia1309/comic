import { Component, OnInit } from '@angular/core';
import { HeroService,Hero } from '../../service/hero.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
  
  // hero:any[]=[];
  hero:Hero[]=[];
  heroes: boolean = false;

  constructor( private _heroService: HeroService, private _router: Router) { 

  }

  ngOnInit(): void {

    if (this._router.url == '/heroes') {
      this.hero = this._heroService.getHeros();
      this.heroes=true;
    }else{
      this.heroes=false;
      this.hero = this._heroService.getVillains();
    }
  }
  
  verHeroe(id:number){
    this._router.navigate(['/detalles',id]);
  }


}
