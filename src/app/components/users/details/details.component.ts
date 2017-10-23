import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
id:number;
  constructor(
      private route:ActivatedRoute,
      private router:Router
  ) {
    this.route.params.subscribe((params:Params) => {
      this.id = params.id;
    });
  }

  ngOnInit() {
  }

}
