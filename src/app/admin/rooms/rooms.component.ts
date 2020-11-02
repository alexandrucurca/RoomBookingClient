import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  design = false;

  constructor(private router: Router,
              private route: ActivatedRoute){ }

  ngOnInit() {
      this.route.queryParams.subscribe((params)=>{
        const id = params['id'];
        const action = params['action'];
        if(action=="design"){
          this.design = true;
          if(id){
            console.log("rooms.component - onInit() -> I get the id : "+ id);
            //Cod care sa ma trimita la camera cu id-ul respectiv

          }
        }
      });
  }

  navigateToRoomEdit(action: string){
     this.router.navigate(['admin','rooms','room-edit'],{queryParams:{action: action}});
  }

  openRoomDesign(){
    this.router.navigate(['admin','rooms'],{queryParams: {action: 'design'}});
  }

}
