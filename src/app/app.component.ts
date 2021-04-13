import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: "At the Beach",
      url: "https://images.unsplash.com/photo-1591017403286-fd8493524e1e?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "At the Park",
      url: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "At the Museum",
      url: "https://images.unsplash.com/photo-1609948105243-dc7341acbe9c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzZXVtJTIwYXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "At the Pool",
      url: "https://images.unsplash.com/photo-1543489822-c49534f3271f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9vbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
  ];
}
