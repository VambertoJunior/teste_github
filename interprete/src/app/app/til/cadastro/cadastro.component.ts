import { Component } from '@angular/core';
import { Til } from '../../shared/model/til';
import { TILS } from "../../shared/model/TILS";
import { TilService } from '../../shared/services/til.service'; // Importar o serviço corretamente
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manutencao',
  templateUrl: './manutencao.component.html',
  styleUrls: ['./manutencao.component.css']
})
export class ManutencaoComponent {
  readonly NOME_BOTAO_CADASTRAR = 'Cadastrar';
  readonly NOME_BOTAO_ATUALIZAR = 'Atualizar';
  tilTratamento: Til;
  mensagemErro = '';
  estahCadastrando = true;
  nomeBotao = this.NOME_BOTAO_CADASTRAR;

  constructor(private tilService: TilService, private rotaAtivada: ActivatedRoute) {
    const idEdicao = this.rotaAtivada.snapshot.params['id'];
    if (idEdicao) {
      this.estahCadastrando = false;
      this.tilService.pesquisarPorId(idEdicao).subscribe(tilRetornado => {
        this.tilTratamento = tilRetornado;
      });
    }
    this.tilTratamento = new Til('', '', '', '');
    this.nomeBotao = this.estahCadastrando ? this.NOME_BOTAO_CADASTRAR : this.NOME_BOTAO_ATUALIZAR;
  }

  cadastrar(): void {
    this.tilService.cadastrar(this.tilTratamento).subscribe(
      tilCadastrado => {
        console.log(tilCadastrado);
      }
    );
  }

  private ehMatriculaCadastrada(matricula: string): boolean {
    // Usar o serviço TilService para verificar se a matrícula está cadastrada
    return this.tilService.ehMatriculaCadastrada(matricula);
  }
}
