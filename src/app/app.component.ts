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
          "name": "CIEC",
          "subMenu": [["Cambio de periodos","http://192.168.0.60:8000/admin/main/periodo/"],
                      ["Cierre de sesión y cambio de identificación","http://192.168.0.60:8000/admin/logout/"]
        ]
        },
        {
          "name": "OLIMPO",
          "subMenu": [["Captura de movimientos","http://192.168.0.60:8000/admin/c_olimpo/movimiento/"],
                      ["Depositos y retiros por mes","http://192.168.0.60:8000/explorer/1/download?format=csv"],
                      ["Cargos, depositos y cuotas por partida","http://192.168.0.60:8000/admin/c_olimpo/condomino/"]
                     ]
        },
        {
          "name": "SADICARNOT 81",
          "subMenu": [["Captura de movimientos","http://192.168.0.60:8000/admin/c_sadiochouno/movimiento/"],
                      ["Depositos y retiros por mes","http://192.168.0.60:8000/explorer/23/download?format=csv"],
                      ["Cargos, depositos y cuotas por partida","http://192.168.0.60:8000/admin/c_sadiochouno/condomino/"]
                     ]
        },
        {
          "name": "SADICARNOT 10",
          "subMenu": [["Captura de movimientos","http://192.168.0.60:8000/admin/c_sadicarnot/movimiento/"],
                      ["Depositos y retiros por mes","http://192.168.0.60:8000/explorer/14/download?format=csv"],
                      ["Cargos, depositos y cuotas por partida","http://192.168.0.60:8000/admin/c_sadicarnot/condomino/"]
                     ]
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
