export class Game {
    public players: string[] = ['Louis' , 'Lora' , 'Ebert'];
    public currentPlayer: number = 0;
    public stack: string[] = [];
    public playedCards: string[] = [];

    constructor() {
        for (let i = 1; i < 14; i++) {
           this.stack.push('ace_' + i);
           this.stack.push('clubs_' + i);
           this.stack.push('diamonds_' + i);
           this.stack.push('hearts_' + i);
        }
        shuffle(this.stack);
    }
}

function shuffle(array: string[]) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }