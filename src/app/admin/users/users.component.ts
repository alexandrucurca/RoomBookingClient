import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  action: string;
  users: Array<User>;
  selectedUser: User;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataSerivce: DataService){}

  ngOnInit(): void {
    console.log("users --> ngOnOnit()");
    /* GET MY USERS */
    this.dataSerivce.getUsers().subscribe((data)=>{
        this.users = data;
        // if I get the users
        /* SUBSCRIBE TO QUERY */
        this.subscribeToQuery();
    });

  }

  subscribeToQuery(){
    this.route.queryParams.subscribe((params)=>{

      const id = params['id'];
      this.action = params['action'];

      if(this.action==='design'){
         if(id){
            this.selectedUser = this.users.find(el=>el.id === +id);
            console.log("users.component - onInit() -> selectedUser : "+ this.selectedUser);
          }
       }
     });
  }

  navigateToUserEdit(action: string){
    this.router.navigate(['admin','users','user-edit'],{queryParams: {action: action}});
  }

  openUserDesign(user: User){
      this.router.navigate(['admin','users'], {queryParams:{action:'design', id: user.id}});
  }

  test(){
    this.router.navigate(['admin','users'], {queryParams:{action:'test'}});
  }
}
