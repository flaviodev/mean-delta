import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'host-panel',
  templateUrl: './host-panel.component.html',
  styleUrls: ['./host-panel.component.css']
})
export class HostPanelComponent implements OnInit {

  @Input()
  localizacao: any;

  constructor() { }

  ngOnInit() {
  }

}
