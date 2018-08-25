import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title:    string;
  menuList: any;
  selected: any;

  constructor() {
      this.title = "CIEC Cuotas, Ingresos y Egresos ";
      this.menuList = [
        {
          "name": "OLIMPO",
          "subMenu": ["Captura de movimientos", "Depositos y retiros por mes", "Cargos, depositos y cuotas"]
        },
        {
          "name": "SADICARNOT 10",
          "subMenu": ["Captura de movimientos", "Depositos y retiros por mes", "Cargos, depositos y cuotas"]
        },
        {
          "name": "SADICARNOT 81",
          "subMenu": ["Captura de movimientos", "Depositos y retiros por mes", "Cargos, depositos y cuotas"]
        }
      ]
    }

    select(item){
        this.selected = (this.selected === item ? null : item);
    }

    isActive(item){
        return this.selected === item;
    }
}
