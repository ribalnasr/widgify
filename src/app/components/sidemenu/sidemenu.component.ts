import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wi-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {

  public structure = [
    {
      title: 'Introduction',
      link: 'introduction',
      children: []
    },
    {
      title: 'Usage',
      link: 'usage'
    },
    {
      title: 'Installation',
      link: 'installation'
    },
    {
      title: 'Documentation',
      link: 'documentation'
    },
    {
      title: 'Plugins',
      link: 'plugins'
    },
  ]

  constructor() { }

  ngOnInit() { }

}
