import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

import 'rxjs/Rx';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  socket = null;
  nickname = 'Admin';
  messages = [];
  message = {
    from : '',
    text: '',
    created: '',
    user: {}
};
  users: any;
  typing: any;
  constructor() { }

  ngOnInit() {
    this.socket = io('http://localhost:3001');
    this.socket.emit('admin-online', this.nickname);
    this.getMessages().subscribe(message => {
      this.messages.push(message);
      console.log(message);
    });
    this.getListUsers().subscribe(data => {
      this.users = data;
    });
    this.userTypingMessage().subscribe(data => {
      this.typing = data;
      console.log(this.typing);
    });
  }
  typingMessageOn(user) {
    this.socket.emit('typing-message-on', {
      user: user
    });
  }
  typingMessageOff(user) {
    this.socket.emit('typing-message-off', {
      user: user
    });
  }
  userTypingMessage() {
    const observable = new Observable(observer => {
      this.socket.on('user-admin-typing-message-on', (data) => {
        observer.next(data);
      });
      this.socket.on('user-admin-typing-message-off', (data) => {
        observer.next(data);
      });
    });
    return observable;
  }
  sendMessage(user) {
    console.log(user);
    this.socket.emit('admin-add-message', {
      text: this.message.text,
      user: user
     });
    this.message.text = '';
  }
  getListUsers() {
    const observable = new Observable(observer => {
      this.socket.on('list-user-chat', (data) => {
        observer.next(data);
      });
    });
    return observable;
  }
  getMessages() {
    const observable = new Observable(observer => {
      this.socket.on('message-admin', (data) => {
        observer.next(data);
      });
      this.socket.on('message-user', (data) => {
        observer.next(data);
      });
    });
    return observable;
  }

  getUsers() {
    const observable = new Observable(observer => {
      this.socket.on('users-changed', (data) => {
        observer.next(data);
      });
    });
    return observable;
  }
}
