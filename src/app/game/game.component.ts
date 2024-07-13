import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';





@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

  pickCardAnimation: boolean = false;
  game!: Game;
  currentCard: string | undefined = '';

constructor() {}

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
       
        console.log(this.currentCard);
      } else {
        console.error("No more cards in the stack");
    }
    setTimeout(() => {
      this.game.playedCards.push(this.currentCard!);
      this.pickCardAnimation = false;
    }, 1000);

    }

}
}
