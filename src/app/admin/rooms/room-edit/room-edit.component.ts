import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Room } from 'src/app/model/Room';
import { Layout } from 'src/app/model/Layout';
import { RoomLayout } from 'src/app/model/RoomLayout';


@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.css']
})
export class RoomEditComponent implements OnInit {

  action: string;
  formRoom: Room;
  returnedRoom: Room;
  roomForm: FormGroup;
  layouts: Array<Layout>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dataService: DataService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    /* FIRSTLY, GET LAYOUTS */
    this.dataService.getLayouts().subscribe(el=>{
      this.layouts=el;
      /* CREATE THE RETURNEDROOM */
      this.createReturnedRoom();
      /* SUBSCRIBE TO QUERY */
      this.subscribeToQuery();
    });
  }

  onSubmit(){
    this.returnedRoom.name = this.roomForm.controls['roomName'].value;
    this.returnedRoom.location = this.roomForm.controls['roomLocation'].value;
    for(const layoutCapacity of this.returnedRoom.layouts){
        layoutCapacity.capacity = this.roomForm.controls[`layoutCapacity${layoutCapacity.layout.name}`].value;
    }

    if(this.action === "Edit"){
        console.log("room-edit -- onSubmit() --> the room i get");
        console.log(this.formRoom);
        this.returnedRoom.id = this.formRoom.id;
        this.dataService.putRoom(this.returnedRoom).subscribe(el=>{
          this.returnedRoom=el;
          this.router.navigate(['admin','rooms'], {queryParams: {action: "design", id: this.returnedRoom.id}});
        });
    }
    else{
        this.dataService.postRoom(this.returnedRoom).subscribe(el=>{
          this.returnedRoom=el;
          this.router.navigate(['admin','rooms'], {queryParams: {action: "design", id: this.returnedRoom.id}});
        });
    }

  }


  generateFormGroup(){
    /* GENERATE FORM GROUP */
    this.roomForm = this.formBuilder.group(
      {
      roomName : [this.formRoom.name, Validators.required],
      roomLocation : [this.formRoom.location, Validators.required]
    });


    for(const layoutCapacity of this.formRoom.layouts){
      this.roomForm.addControl(`layout${layoutCapacity.layout.name}`,
               this.formBuilder.control(layoutCapacity.layout.name));
      this.roomForm.addControl(`layoutCapacity${layoutCapacity.layout.name}`,
               this.formBuilder.control(layoutCapacity.capacity, [Validators.required, Validators.min(0)]));
   }
  }

  createReturnedRoom(){
    this.returnedRoom = new Room();
    this.returnedRoom.populateWithLayouts(this.layouts);
  }

  subscribeToQuery(){
    this.route.queryParams.subscribe((params)=>{
      this.action= params['action'];
      const id = params['id'];
      if(this.action){
         if(id){
          this.dataService.getRoomById(+id).subscribe(el=>{
            this.formRoom=el;
            /* GENERATE FORM GROUP */
            this.generateFormGroup();
          });
         }
         else{
           this.formRoom = new Room();
           this.formRoom.populateWithLayouts(this.layouts);
           /* GENERATE FORM GROUP */
           this.generateFormGroup();

         }
      }
  });
  }

  verifyLayout(layoutCapacity: RoomLayout): boolean{
    const value = this.roomForm.controls[`layoutCapacity${layoutCapacity.layout.name}`].value;
    if(value==null || value<0){
      return true;
    }
    return false;

  }

}
