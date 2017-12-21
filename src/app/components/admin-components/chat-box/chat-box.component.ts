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
  message = '';
  users: any;
  constructor() { }

  ngOnInit() {
    this.socket = io('http://localhost:3001');
    this.socket.emit('set-nickname', this.nickname);
    this.getMessages().subscribe(message => {
      this.messages.push(message);
      console.log(message);
    });

    this.getUsers().subscribe(data => {
      const user = data['user'];
      console.log(user);
    });
    this.getListUsers().subscribe(data => {
      this.users = data;
    });
  }
  sendMessage() {
    this.socket.emit('admin-add-message', { text: this.message });
    this.message = '';
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
