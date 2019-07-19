export class Board {
    grid: string[][];
    rows: number;
    cols: number;

    constructor(rows: number, cols: number) {
        this.rows = rows;
        this.cols = cols;
        this.buildArray()
    }

    buildArray(){
        this.grid = [];
        for (let i = 0; i < this.cols; i++) {
            this.grid[i] = [];
            for (let j = 0; j < this.rows; j++) {
                this.grid[i][j] = ' ';
            }
        }
    }
//    print() {
//         for (let i = 0; i < this.cols; i++) {
//             for (let j = 0; j < this.rows; j++) {
//                 console.log(this.grid[i][j]);
//             }
//         }
//     }



print() {
    let str = "";
    for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
            if (j == this.cols - 1)
                str += ' ' + this.grid[i][j] + ' ';
            else
                str += ' ' + this.grid[i][j] + ' | ';
        }
        if (i != this.rows - 1)
            str += this.addLinesToBoard(this.cols);
    }
    console.log(str);
}
//add lines to board according to the table columns. (i tried to build something dynamically )
// giving 5 lines (-) for each column.
addLinesToBoard(num: number): string {
    let str: string = "";
    str += '\n';
    for (let i = 0; i < num; i++) {
        str += '----';
    }
    str += '\n';
    return str;

}

}

