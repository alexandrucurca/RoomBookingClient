import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;
  formUser: User;
  message: string;
  repPassword: string;
  waiting = true;

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
     this.route.queryParams.subscribe((params)=>{
         const action= params['action'];
         const id= params['id'];
         if(action){
            this.message = action;
            if(id){
              this.dataService.getUserById(+id).subscribe((next)=>{
                this.user=next;
                this.formUser = next;
                this.repPassword = next.password;
              },(err)=>{
                this.router.navigate(['404']);
                console.log("Nothing found...");
              });
              //console.log(this.user.name);
            }
            else{
              this.formUser = new User();
            }
         }
     });
  }


  onSubmit(){
    this.waiting = true;
    if(this.message === "Edit"){
      this.dataService.putUser(this.formUser).subscribe(el=>{
        this.router.navigate(['admin','users'], {queryParams:{action:'design', id: this.formUser.id}});
      });
    }
    else{
      this.dataService.postUser(this.formUser).subscribe(el=>{
        this.router.navigate(['admin','users'], {queryParams:{action:'design', id: this.formUser.id}});
      });
    }
  }
}
