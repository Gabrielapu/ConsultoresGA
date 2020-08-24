import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css']
})
export class StepThreeComponent implements OnInit {

  startDelay = '';
  endDelay = '';
  guardFormGroup: FormGroup;
  
  @Output() DiffHoraInicio = new EventEmitter();
  @Output() DiffHoraFin = new EventEmitter<number>();
  @Output() form3 = new EventEmitter();
  @Input() turno = '';


  constructor(private _formBuilder: FormBuilder) {

    this.guardFormGroup = this._formBuilder.group({
      inicioDir: [''],
      finDir: [''],
      inicioObs: [''],
      finObs: [''],
    })
  }

  ngOnInit(): void {
    this.form3.emit(this.guardFormGroup);
  }

  getDifference() {
    if (this.guardFormGroup.valid) {
      const inicioDir = this.guardFormGroup.get('inicioDir').value;
      const finDir = this.guardFormGroup.get('finDir').value;
      const inicioObs = this.guardFormGroup.get('inicioObs').value;
      const finObs = this.guardFormGroup.get('finObs').value;

      const diffInicio = this.parseTime(inicioDir) - this.parseTime(inicioObs)
      const diffFin = this.parseTime(finDir) - this.parseTime(finObs);

      if (diffInicio > 0) {
        this.startDelay = `Llegada ${diffInicio} min. antes.`;
        this.DiffHoraInicio.emit(diffInicio);
      } else {
        const time = Math.abs(diffInicio);
        this.startDelay = `Atraso: ${time} min.`;
        this.DiffHoraInicio.emit(diffInicio);
      }

      if (diffFin < 0) {
        const time = Math.abs(diffFin);
        this.endDelay = `Salida ${time} min. después.`;
        this.DiffHoraFin.emit(diffFin);
      } else {
        this.endDelay = `Salida: ${diffFin} min. antes`;
        this.DiffHoraFin.emit(diffFin);
      }
    }
  }

  parseTime(hora) {
    const c = hora.split(':');
    return parseInt(c[0]) * 60 + parseInt(c[1]);
  }
}
