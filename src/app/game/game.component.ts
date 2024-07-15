import { Component, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  MatDialog
} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from '../dialog/dialog.component';
import { GameInfoComponent } from '../game-info/game-info.component';



@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, GameInfoComponent , MatDialogModule ,MatButtonModule, MatIconModule, MatFormFieldModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent{

  pickCardAnimation: boolean = false;
  game!: Game;
  currentCard: string | undefined = '';
  name!: string;


constructor(public dialog: MatDialog) {}

ngOnInit(): void {
  this.newGame();
}

newGame(){
this.game = new Game();
console.log(this.game);
}

  takeCard(){
    if (!this.pickCardAnimation) {
      if (this.game.stack.length > 0) {
        this.currentCard = this.game.stack.pop();
        this.pickCardAnimation = true;
        this.game.currentPlayer++;
        this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      } else {
        console.error("No more cards in the stack");
    }
    setTimeout(() => {
      this.game.playedCards.push(this.currentCard!);
      this.pickCardAnimation = false;
    }, 1000);

    }
}

openDialog(): void {
  const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    data: {name: this.name},
  });

  dialogRef.afterClosed().subscribe((result:string) => {
    console.log('The dialog was closed');
    this.name = result;
    this.game.players.push(result);
    console.log(this.game.players);
  });
}



}
