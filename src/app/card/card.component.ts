import { Component, OnInit } from '@angular/core';

const showElem = {
  show :false,
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  showElem = showElem;
  toggleElement() {
    showElem.show = !showElem.show;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
