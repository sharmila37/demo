import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  myForm:any;
  Name:any;
dat: any;

  constructor(private service:ServiceService){}


  ngOnInit(): void{
    this.myForm=new FormGroup({
      name:new FormControl()
    });
    this.getdata();
  }

  postform(data:any){
    this.service.postForm(data).subscribe(pres=>{
      this.Name=pres;
    })
    this.getdata();
  }

  getdata(){
    this.service.getForm().subscribe(des=>{
      console.log(des);
      this.Name=des;
      this.myForm.reset();
    })
  }

  deleted(dat:any){
    this.service.deleteForm(dat.id).subscribe(res=>{
      res;
    })
    this.getdata();
    this.myForm.reset();
  }
}
