import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-user-design',
  templateUrl: './user-design.component.html',
  styleUrls: ['./user-design.component.css']
})
export class UserDesignComponent implements OnInit {

  @Input()
  user: User;
  message: string;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("user-design - onInit()");
    console.log("User in user-design : " + this.user.name);
  }

  navigateToUserEdit(action: string, id:number){
    this.router.navigate(['admin','users','user-edit'],{queryParams: {action: action, id:id}});
  }
}
