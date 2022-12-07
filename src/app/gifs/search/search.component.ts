import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }


  buscar() {
    const valor = this.txtBuscar?.nativeElement.value

    if( valor.trim().length === 0) {
      return
    }
    this.gifsService.buscarGifs(valor)

    this.txtBuscar.nativeElement.value = ""
  }
}
