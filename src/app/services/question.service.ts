import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from '../model/question.model';
import { serverUrl } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { IQuestion } from '@app/store/state/question/question.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private http: HttpClient) {}

  addQuestion1(question: IQuestion): Observable<{ id: number }> {
    return this.http.post<{ id: number }>(`${serverUrl + 'question'}`, question);
  }

  getQuestions1(): Observable<IQuestion[]> {
    return this.http.get<IQuestion[]>(`${serverUrl + 'question'}`).pipe(
      map((data) => {
        const questions: IQuestion[] = [];
        for (let key in data) {
          questions.push({ ...data[key], id: data[key].id });
        }
        return questions;
      })
    );
  }

  addQuestion(question: Question): any {
    return this.http.post(`${serverUrl + 'question/'}`, question);
  }

  getQuestions() {
    return this.http.get<Question[]>(`${serverUrl + 'question'}`);
  }

  getQuestionById(id: number) {
    return this.http.get<Question[]>(`${serverUrl + 'question'}`);
  }

  updateQuestion(question: IQuestion) {
    const postData = {
      [question.id]: question,
    };
    return this.http.patch(`${serverUrl + 'question/' + question.id}`, question);
  }

  delete(id: string) {
    return this.http.delete(`${serverUrl + 'question/' + id}`);
  }
}
