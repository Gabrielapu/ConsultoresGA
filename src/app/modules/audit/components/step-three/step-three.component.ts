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

  getdifference() {
    if (this.guardFormGroup.valid) {
      const inicioDir = this.guardFormGroup.get('inicioDir').value;
      const finDir = this.guardFormGroup.get('finDir').value;
      const inicioObs = this.guardFormGroup.get('inicioObs').value;
      const finObs = this.guardFormGroup.get('finObs').value;

      const diffInicio = this.parseTime(inicioDir) - this.parseTime(inicioObs)
      const diffFin = this.parseTime(finDir) - this.parseTime(finObs);

      if (diffInicio > 0) {
        this.startDelay = `Llegada ${diffInicio} min. antes.`
      } else {
        const time = Math.abs(diffInicio);
        this.startDelay = `Atraso: ${time} min.`
      }

      if (diffFin < 0) {
        const time = Math.abs(diffFin);
        this.endDelay = `Salida ${time} min. después.`
      } else {
        this.endDelay = `Salida: ${diffFin} min. antes`
      }
    }
  }

  parseTime(s) {
    const c = s.split(':');
    return parseInt(c[0]) * 60 + parseInt(c[1]);

  }

}
