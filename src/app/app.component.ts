import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sunoidaTest';

  from: any;
  to: any;

  ngOnInit(): void {
    var from = document.getElementById("from");
    var to = document.getElementById("to");

    var c = document.createElement("canvas");

    c.style.top = from!.offsetTop + "px";
    c.style.left = (from!.offsetLeft + from!.offsetWidth) + "px";
    c.style.width = (c.width = to!.offsetLeft - from!.offsetLeft - from!.offsetWidth) + "px";
    c.style.height = (c.height = to!.offsetTop - from!.offsetTop) + "px";
    c.className = "curveCanvas";

    // Draw the curve

    var ctx = c.getContext("2d");
    ctx!.beginPath();
    ctx!.moveTo(0, 0);
    ctx!.bezierCurveTo(c.width / 2, 0, c.width / 2, c.height, c.width, c.height);
    ctx!.stroke();

    document.body.appendChild(c);
  }


}
