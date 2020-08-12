import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuditService } from 'src/app/core/services/audit.service';
import { Section } from 'src/app/shared/models/section';
import { Question } from 'src/app/shared/models/question';
import { Answer } from 'src/app/shared/models/answer';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.css']
})
export class StepFourComponent implements OnInit {

  sections: Section[];
  score: number = 0;
  max: number = 0;
  @Output() audit = new EventEmitter();

  constructor(private auditService: AuditService) { }

  ngOnInit(): void {
    this.sections = this.auditService.getSections();
  }

  selectedAnswer(value: string, question: Question, answer: Answer) {
    // Solo aplica a cada pregunta
    question.answers.forEach(answer => answer.isSelected = false);
    answer.isSelected = true;
    question.answers.forEach(answer => {
      if(answer.isSelected && value !== 'na') {
        this.max += answer.score;
      }
    })
  }

  calculateScore() {
    this.score = 0;
    this.sections.forEach(section => {
      section.questions.forEach(question => {
        question.answers.forEach(answer => {
          if(answer.isSelected) {
            this.score += Math.round(answer.score);
          }
        });
      });
    });
  }

  saveChanges() {
    this.calculateScore();
    this.audit.emit(this.sections);
  }
}
