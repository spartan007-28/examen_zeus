import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TestServiceService } from 'src/app/services/test-service.service';
import Swal from 'sweetalert2';
import { Employee } from './../../models/data.model';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styles: [
  ]
})
export class ModalFormComponent implements OnInit {


  @Output() resetComp = new EventEmitter();

  employee: Employee = new Employee();
  modalRef: BsModalRef;

  constructor( private modalService: BsModalService, private service: TestServiceService ) { }

  ngOnInit(): void {

  }

  addNewEmployee( form: NgForm ) {

    const tr = true;

    Swal.fire({
      title: 'Espere',
      text: 'Agregando Usuario',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    this.service.addEmployee( this.employee )
      .subscribe( (resp: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Emplooye',
          text: resp.data
        }).then( val => {
          if (val) {
            this.modalRef.hide();
            form.reset();
            this.resetComp.emit(tr);
          }
        })
      }, ( error: HttpErrorResponse) => {
        Swal.fire({
          title: 'Error',
          text: error.error,
          icon: 'error'
        });
      });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      ignoreBackdropClick: true
    });
  }

}
