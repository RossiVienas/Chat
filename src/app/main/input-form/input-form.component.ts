import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';


import { Message } from '../main.component';


@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  @Output() onAdd: EventEmitter<Message> = new EventEmitter<Message>();

  content = ''
  link = ''

  constructor() { }

  ngOnInit() {
  }


  add() {
    if (this.content.trim()) {

      let date: Date = new Date();

      const message: Message = {
        content: this.content,
        link: this.link.trim() ? this.link.trim() : '0',
        data: date
      };

      this.onAdd.emit(message);

      this.content = this.link = '';
    }
  }

}
