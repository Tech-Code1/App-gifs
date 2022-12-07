import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styles: [
  ]
})
export class ResultsComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  get resultados() {
    return this.gifsService.resultados
  }

  ngOnInit(): void {
  }

}
