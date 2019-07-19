import { Player } from "./Player";
import { Board } from "./Board";
import { GameStatus } from "./GameStatus";

export class Game {
    board: Board;
    sum: Number;
    player1: Player;
    player2: Player;
    status: GameStatus;
    moveshistory: string;
    movesOfPlayers: number;
    winner:string;

    constructor(rows: number, cols: number) {
        this.board = new Board(rows, cols);
        this.movesOfPlayers = 0;
        this.status = GameStatus.InProgress;
        this.moveshistory='';
        this.winner = '';
    }

    addPlayer(player: Player) {
        if (this.player1 === undefined) {
            this.player1 = player;

        }
        else if (this.player2 === undefined) {
            this.player2 = player;

        }

    }

    printSummary() {
        console.log(this.moveshistory);
    }
    addSummary(gh: string){
        this.moveshistory+= gh;
        this.moveshistory+='\n';
    }
    nextMove(rows: number, cols: number) {
        if (this.status === 1) {
            //player 1 play check
            if (this.movesOfPlayers % 2 === 0 && this.board.grid[cols][rows] === ' ') {
                this.board.grid[rows][cols] = this.player1.shape;
                this.movesOfPlayers++;
                let gh:string; 
                gh = String(this.player1.name+' Put '+ this.player1.shape + ' in position ' + cols+' '+rows);
                this.addSummary(gh);
                this.checkstatus();
                return true;

            }
            //else its player 2
            else if (this.movesOfPlayers % 2 !== 0 && this.board.grid[cols][rows] === ' ') {
                this.board.grid[rows][cols] = this.player2.shape;
                this.movesOfPlayers++;
                let gh1 = String(this.player2.name+ ' Put '+this.player2.shape + ' in position ' + cols+' '+rows);
                this.addSummary(gh1);
                this.checkstatus();
                return true;
            }
        }
        else{
           //console.log('false '+this.winner);
            return false +' '+this.winner;
        }

        
    }


    checkstatus() {
        let sum1 = 0;
        let sum2 = 0;

        for (let i = 0; i < this.board.cols; i++) {
            for (let j = 0; j < 1; j++) {
                if (this.board.grid[i][j] === "x") {
                    sum1++;
                }
                else if (this.board.grid[i][j] === "o") {
                    sum2++;
                }
            }
            if (sum1 === this.board.cols) {
                this.winner += String(this.player1.name+' won');
                this.status = 0;
                return;
                //break;
            }
            else if (sum2 === this.board.cols) {
                this.winner += String(this.player2.name+' won');
                this.status = 0;
                return;
                //break;
            }
        }
        sum1 = 0;
        sum2 = 0;


        for (let i = 0; i < 1; i++) {
            for (let j = 0; j < this.board.rows; j++) {
                if (this.board.grid[i][j] === "x") {
                    sum1++;
                }
                else if (this.board.grid[i][j] === "o") {
                    sum2++;
                }
            }
            if (sum1 === this.board.cols) {
                this.winner += String(this.player1.name+' won');
                this.status = 0;
                return;

            }
            else if (sum2 === this.board.cols) {
                this.winner += String(this.player2.name+' won');
                this.status = 0;
                return;

            }
        }
        sum1 = 0;
        sum2 = 0;


        for (let i = 0; i < this.board.cols; i++) {
            for (let j = 0; j < this.board.rows; j++) {
                if (this.board.grid[i][j] === "x") {
                    sum1++;
                }
                else if (this.board.grid[i][j] === "o") {
                    sum2++;
                }
            }
            if (sum1 === this.board.cols) {
                this.winner += String(this.player1.name+' won');
                this.status = 0;
                return;

            }
            else if (sum2 === this.board.cols) {
                this.winner += String(this.player2.name+' won');
                this.status = 0;
                return;

            }
        }
        sum1 = 0;
        sum2 = 0;


        for (let i = this.board.cols; i < 0; i--) {
            for (let j = this.board.rows; j < 0; j++) {
                if (this.board.grid[i][j] === "x") {
                    sum1++;
                }
                else if (this.board.grid[i][j] === "o") {
                    sum2++;
                }
            }
            if (sum1 === this.board.cols) {
                this.winner += String(this.player1.name+' won');
                this.status = 0;
                return;

            }
            else if (sum2 === this.board.cols) {
                this.winner += String(this.player2.name+' won');
                this.status = 0;
                return;

            }
        }
        sum1 = 0;
        sum2 = 0;
    }

}




