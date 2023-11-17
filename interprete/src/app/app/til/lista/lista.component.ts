import {Component, OnInit} from '@angular/core';
import {Til} from "../../shared/model/til";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit{
  til: Til[] = [];
  tilPesquisa: Til[] = [];

  constructor(private tilService: TilService) {
  }

  ngOnInit() {
    this.tilService.listar().subscribe(tilsRetornados => {
      this.til = tilsRetornados;
    });
    console.log('interpretes está aqui');
    console.log(this.til);
  }

  remover(tilARemover: Til): void {
    this.tilService.remover(tilARemover).subscribe(tilRemovido => {
      console.log('Um interprete foi removido');
      const indxARemover = this.til.findIndex(til =>
        til.matricula === tilARemover.matricula);

      if (indxARemover >= 0) {
        this.til.splice(indxARemover, 1);
      }
    });
  }

  pesquisar(porNome: string) {
    if (porNome.length === 0) {
      this.tilPesquisa = [];
    }
    this.tilPesquisa = this.til.filter(til =>
      til.nome.startsWith(porNome)
    );
  }
}
