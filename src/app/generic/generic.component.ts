import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.scss']
})
export class GenericComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  home(){
    this.router.navigate(['/home'])
  }
  

}
