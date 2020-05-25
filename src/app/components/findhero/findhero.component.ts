import { Component, OnInit } from '@angular/core';
import { Hero, HeroService } from 'src/app/service/hero.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-findhero',
  templateUrl: './findhero.component.html',
  styleUrls: ['./findhero.component.css']
})
export class FindheroComponent implements OnInit {
    heroes: Hero[];
    constructor(
      private heroservice : HeroService,
      private route : ActivatedRoute,
      private _router: Router
    ) {}
  
    ngOnInit(): void {
      this.heroes=this.heroservice.buscarHeroe(this.route.snapshot.paramMap.get('palabra') );
      console.log(this.heroes);
    }
   
    verHeroe(id:number){
      this._router.navigate(['/detalles',id]);
    }
}
