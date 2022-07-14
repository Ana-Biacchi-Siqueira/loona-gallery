import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  })

  export class AppComponent {

  photos = [
    {
      url:"https://pbs.twimg.com/media/D693yHdW0AAQnZ6?format=jpg&name=4096x4096",
      description:"A photo of one of the Loona members called Gowon, she's holding her hands in an X format over her mouth, she is also blonde in this photo taken by pink skies on twitter."},
    {
      url:"https://pbs.twimg.com/media/ERZSb5LW4AAOpD5.jpg",
      description:"A photo of Jeon Heejin, one of the members of Loona, she's wearing a necklace chain across the middle of her face while looking into the camera that was shot by Liptight on twitter."
    }];
  }
