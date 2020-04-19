import {Component, Input, OnInit} from '@angular/core';



export interface  Message {
  id: number;
  content: string;
  link?: string;
  data: Date;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  messages: Array<Message> = [];

  constructor() { }

  ngOnInit() {
  }

  addMessage(message: Message) {

    // set id
    if (!this.messages.length) {
      message.id = 1;
    } else {
      let max = this.messages[0].id;

      for (let i = 0; i < this.messages.length; i++) {
        if (this.messages[i].id > max) {
          max = this.messages[i];
        }
      }

      message.id = max + 1;
    }

    // add message in array
    this.messages.unshift(message);
  }

  deleteMessage(id: number) {
    for (let i = 0; i < this.messages.length; i++) {
      if (this.messages[i].id === id) {
        this.messages.splice(i, 1);

        console.log('Удален элемент с id' + id);
      }
    }
  }

}
