import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FilterPipe } from 'ngx-filter-pipe';
import { Groups, Group } from 'src/app/models/data.model';
import { TestServiceService } from 'src/app/services/test-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styles: [
  ]
})
export class GroupsComponent implements OnInit {

  groups: Groups[] = [];
  groupsN: Groups[] = [];
  itemsG: Group[] = [];
  banderaDrog: boolean;
  allComplete: boolean;
  groupFilter: Groups = new Group();
  groupName = '';

  constructor( private service: TestServiceService  ) { }

  ngOnInit(): void {
    this.showGroups();
    this.banderaDrog = true;
    this.allComplete = true;
  }

  showGroups() {
    this.service.getGroups()
      .subscribe( (resp: any) => {
        this.groups = resp.data.groups;
      });
  }

  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(this.groups, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);


      const area = event.item.element.nativeElement.innerText;
      const item = this.groups.find( i => i.name === area);
      const id = item.id;
      this.groupName = this.groupsN[0].name;

      this.service.getGroupsById(id)
        .subscribe( (resp: any) => {
          this.itemsG = resp.data.employees;
          this.itemsG.forEach( i => {
            i.check = true;
          });
          this.groupsN = [];
          this.banderaDrog = false;
        }, (error: HttpErrorResponse) => {
          Swal.fire({
            title: 'Error',
            text: error.error,
            icon: 'error'
          }).then(res => {
            if (res.value) {
              this.ngOnInit();
              this.groupsN = [];
            }
          });
        });
    }
  }


  deleteCard() {
    this.ngOnInit();
    this.allComplete = true;
    console.clear();
  }

  // Check

  updateAllComplete() {
    this.allComplete = true;
  }

  setAll(completed: boolean) {
    this.itemsG.forEach( i => i.check = completed);
  }

  showItemsEnabled() {
    this.itemsG.forEach( i => {
      if (i.check === true) {
        console.log(i);
      }
    });
  }


}
