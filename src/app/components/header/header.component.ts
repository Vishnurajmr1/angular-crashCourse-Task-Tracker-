import { Component ,OnInit} from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import {Router} from '@angular/router'
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'Task Tracker';
  showAddTask!: boolean;
  subscription!:Subscription;
  constructor(private uiService:UiService,private router:Router){
    this.subscription=this.uiService.onToggle().subscribe(value=>this.showAddTask=value)
  }
  ngOnInit(): void {
  }
  toggleAddTask(): void{
    this.uiService.toggleAddTask();
  }

  hasRoute(route:string):boolean{
    return this.router.url===route;
  }
}

