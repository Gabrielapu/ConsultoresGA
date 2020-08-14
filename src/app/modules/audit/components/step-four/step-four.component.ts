import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuditService } from 'src/app/core/services/audit.service';
import { Section } from 'src/app/shared/models/section';
import { Question } from 'src/app/shared/models/question';
import { Answer } from 'src/app/shared/models/answer';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
  @Output() scoreEmit = new EventEmitter();
  @Output() maxEmit = new EventEmitter();

  constructor(private auditService: AuditService) { }

  ngOnInit(): void {
    this.sections = this.auditService.getSections();
  }

  selectedAnswer(value: string, question: Question, answer: Answer) {
    // Solo aplica a cada pregunta
    question.answers.forEach(answer => answer.isSelected = false);
    answer.isSelected = true;
  }

  calculateScore() {
    this.score = 0;
    this.max = 0;
    this.sections.forEach(section => {
      section.questions.forEach(question => {

        if(!question.answers[2].isSelected && question.answers[0].isSelected || question.answers[1].isSelected) {
          this.max += question.answers[0].score;
        }

        question.answers.forEach(answer => {
          if(answer.isSelected) {
            this.score += answer.score;
          }
        });
      });
    });
  }

  saveChanges() {
    this.calculateScore();
    this.scoreEmit.emit(this.score);
    this.maxEmit.emit(this.max);
    this.audit.emit(this.sections);
  }
}
