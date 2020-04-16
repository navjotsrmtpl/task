import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private router:Router) { }

  ngAfterViewInit(){
 let   $body = $('body');
   // Navigation Panel Toggle.
   $('<a href="#navPanel" class="navPanelToggle"></a>')
   .appendTo($body);

// Navigation Panel.
 $(
   '<div id="navPanel">' +
     $('#nav').html() +
     '<a href="#navPanel" class="close"></a>' +
   '</div>'
 )
   .appendTo($body)
   .panel({
     delay: 500,
     hideOnClick: true,
     hideOnSwipe: true,
     resetScroll: true,
     resetForms: true,
     side: 'left'
   });
 console.log("$body =",$body);
 
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
}

onSubmit() {
  this.submitted = true;

  if (this.registerForm.invalid) {
      return;
  }
  

  alert('SUCCESS!! \n\n' + JSON.stringify(this.registerForm.value))
}
get f() { return this.registerForm.controls; }


}
