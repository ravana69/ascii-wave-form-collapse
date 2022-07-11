"use strict";
class Helpers {
    fromPos(x, y, width) {
        return x + width * y;
    }
    fromIndex(index, width) {
        return {
            x: index % width,
            y: index / width
        };
    }
    random(startOrArr, end) {
        if (Array.isArray(startOrArr)) {
            let i = Math.floor(Math.random() * startOrArr.length);
            return startOrArr[i];
        }
        else if (end != undefined) {
            return startOrArr + Math.random() * (end - startOrArr);
        }
        else {
            return Math.random() * startOrArr;
        }
        // return 0;
    }
}
const helpers = new Helpers();
class Main {
    constructor() {
        this.width = 64;
        this.height = 32;
        this.cells = [];
        this.tiles = new Tiles();
        // this.tiles.newTile('', []);
        let dead = this.tiles.newTile(" ", [0, 0, 0, 0]);
        // this.tiles.newTile('─', [0,1,0,1]);
        // this.tiles.newTile('│', [1,0,1,0]);
        // this.tiles.newTile('┌', [0,1,1,0]);
        // this.tiles.newTile('┐', [0,0,1,1]);
        // this.tiles.newTile('└', [1,1,0,0]);
        // this.tiles.newTile('┘', [1,0,0,1]);
        // this.tiles.newTile('┬', [0,1,1,1]);
        // this.tiles.newTile('├', [1,1,1,0]);
        // this.tiles.newTile('┤', [1,0,1,1]);
        // this.tiles.newTile('┴', [1,1,0,1]);
        // this.tiles.newTile('┼', [1,1,1,1]);
        // this.tiles.newTile('╮', [0,0,1,1]);
        // this.tiles.newTile('╯', [1,0,0,1]);
        // this.tiles.newTile('╭', [0,1,1,0]);
        // this.tiles.newTile('╰', [1,1,0,0]);
        // this.tiles.newTile('━', [0,2,0,2]);
        // this.tiles.newTile('┃', [2,0,2,0]);
        // this.tiles.newTile('┏', [0,2,2,0]);
        // this.tiles.newTile('┓', [0,0,2,2]);
        // this.tiles.newTile('┗', [2,2,0,0]);
        // this.tiles.newTile('┛', [2,0,0,2]);
        // this.tiles.newTile('┳', [0,2,2,2]);
        // this.tiles.newTile('┣', [2,2,2,0]);
        // this.tiles.newTile('┫', [2,0,2,2]);
        // this.tiles.newTile('┻', [2,2,0,2]);
        // this.tiles.newTile('╋', [2,2,2,2]);
        this.tiles.newTile("═", [0, 1, 0, 1]);
        this.tiles.newTile("║", [1, 0, 1, 0]);
        this.tiles.newTile("╔", [0, 1, 1, 0]);
        this.tiles.newTile("╗", [0, 0, 1, 1]);
        this.tiles.newTile("╚", [1, 1, 0, 0]);
        this.tiles.newTile("╝", [1, 0, 0, 1]);
        this.tiles.newTile("╦", [0, 1, 1, 1]);
        this.tiles.newTile("╠", [1, 1, 1, 0]);
        this.tiles.newTile("╣", [1, 0, 1, 1]);
        this.tiles.newTile("╩", [1, 1, 0, 1]);
        this.tiles.newTile("╬", [1, 1, 1, 1]);
        // this.tiles.newTile('┝', [1,2,1,0]);
        // this.tiles.newTile('┞', [2,1,2,0]);
        // this.tiles.newTile('┟', [1,1,2,0]);
        // this.tiles.newTile('┡', [2,2,1,0]);
        // this.tiles.newTile('┢', [1,2,2,0]);
        // this.tiles.newTile('┠', [2,1,2,0]);
        // this.tiles.newTile('┥', [1,0,1,2]);
        // this.tiles.newTile('┦', [2,0,1,1]);
        // this.tiles.newTile('┧', [1,0,2,1]);
        // this.tiles.newTile('┨', [2,0,2,1]);
        // this.tiles.newTile('┩', [2,0,1,2]);
        // this.tiles.newTile('┪', [1,0,2,2]);
        // this.tiles.newTile('╼', [0,2,0,1]);
        // this.tiles.newTile('╾', [0,1,0,2]);
        // this.tiles.newTile('╽', [1,0,2,0]);
        // this.tiles.newTile('╿', [2,0,1,0]);
        // this.tiles.newTile('┽', [1,1,1,2]);
        // this.tiles.newTile('┾', [1,2,1,1]);
        // this.tiles.newTile('┿', [1,2,1,2]);
        // this.tiles.newTile('╀', [2,1,1,1]);
        // this.tiles.newTile('╁', [1,1,2,1]);
        // this.tiles.newTile('╂', [2,1,2,1]);
        // this.tiles.newTile('╃', [2,1,1,2]);
        // this.tiles.newTile('╄', [2,2,1,1]);
        // this.tiles.newTile('╅', [1,1,2,2]);
        // this.tiles.newTile('╆', [1,2,2,1]);
        // this.tiles.newTile('╇', [2,2,1,2]);
        // this.tiles.newTile('╈', [1,2,2,2]);
        // this.tiles.newTile('╉', [2,1,2,2]);
        // this.tiles.newTile('╊', [2,2,2,1]);
        let mWidth = 20;
        let mHeight = 12;
        let mOffX = Math.floor(this.width / 2 - mWidth / 2);
        let mOffY = Math.floor(this.height / 2 - mHeight / 2);
        let middle = [
            0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
            0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1,
            0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1,
            0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,
            0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
            0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,
            0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
            0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0
        ];
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                let cell = new Cell(this, { x, y });
                //                 if(x >= mOffX && y >= mOffY && x < mOffX + mWidth && y < mOffY + mHeight) {
                //                     let mX = x - mOffX;
                //                     let mY = y - mOffY;
                //                     console.log(mX, mY);
                //                     let i = helpers.fromPos(mX, mY, mWidth);
                //                     if(middle[i]) cell.entropy = [dead];
                //                 }
                this.cells.push(cell);
            }
        }
        // console.log(this.cells);
        let interval = setInterval(() => {
            if (this.cells.filter((c) => !c.collapsed).length) {
                this.update();
            }
            else {
                console.log("DONE");
                clearInterval(interval);
            }
        }, 10);
        this.update();
    }
    update() {
        let nextCells = this.cells
            .filter((c) => !c.collapsed)
            .sort((a, b) => {
            return a.entropy.length > b.entropy.length
                ? 1
                : b.entropy.length > a.entropy.length
                    ? -1
                    : 0;
        });
        let minCells = nextCells.filter((c) => c.entropy.length == nextCells[0].entropy.length);
        let cell = minCells.length > 1 ? helpers.random(minCells) : minCells[0];
        cell.entropy = [helpers.random(cell.entropy)];
        for (let cell of this.cells) {
            cell.update();
        }
        // console.log(this.cells);
        this.draw();
    }
    draw() {
        // for(let i = 0; i< this.height + 2; i++) process.stdout.clearLine(-1);
        let spaces = new Array(this.width).fill("━").join("");
        // let startLine = `┏${spaces}┓\n`;
        let bodyText = "";
        for (let y = 0; y < this.height; y++) {
            let textLine = "";
            for (let x = 0; x < this.width; x++) {
                let cell = this.cells[helpers.fromPos(x, y, this.width)];
                textLine += cell.collapsed ? cell.collapsed.character : " ";
            }
            textLine += "\n";
            bodyText += textLine;
        }
        // let endline = `┗${spaces}┛\n`;
        let el = document.getElementById("container");
        el.innerHTML = bodyText;
        // console.log(bodyText);
    }
}
class Cell {
    constructor(parent, position) {
        this.parent = parent;
        this.position = position;
        this.entropy = [];
        this.entropy = this.parent.tiles.tiles.slice();
    }
    get collapsed() {
        return this.entropy.length == 1 ? this.entropy[0] : undefined;
    }
    update() {
        if (!this.collapsed) {
            let possibleTiles = this.entropy.slice();
            // up
            let cell = this.position.y - 1 >= 0
                ? this.parent.cells[helpers.fromPos(this.position.x, this.position.y - 1, this.parent.width)]
                : null;
            if (cell && cell.collapsed) {
                possibleTiles = possibleTiles.filter((t) => { var _a; return (_a = cell === null || cell === void 0 ? void 0 : cell.collapsed) === null || _a === void 0 ? void 0 : _a.validSiblings.down.includes(t); });
            }
            else if (!cell) {
                possibleTiles = possibleTiles.filter((t) => t.edgeTypes[0] == 0);
            }
            // right
            cell =
                this.position.x + 1 <= this.parent.width
                    ? this.parent.cells[helpers.fromPos(this.position.x + 1, this.position.y, this.parent.width)]
                    : null;
            if (cell && cell.collapsed) {
                possibleTiles = possibleTiles.filter((t) => { var _a; return (_a = cell === null || cell === void 0 ? void 0 : cell.collapsed) === null || _a === void 0 ? void 0 : _a.validSiblings.left.includes(t); });
            }
            else if (!cell) {
                possibleTiles = possibleTiles.filter((t) => t.edgeTypes[1] == 0);
            }
            // down
            cell =
                this.position.y + 1 <= this.parent.height
                    ? this.parent.cells[helpers.fromPos(this.position.x, this.position.y + 1, this.parent.width)]
                    : null;
            if (cell && cell.collapsed) {
                possibleTiles = possibleTiles.filter((t) => { var _a; return (_a = cell === null || cell === void 0 ? void 0 : cell.collapsed) === null || _a === void 0 ? void 0 : _a.validSiblings.up.includes(t); });
            }
            else if (!cell) {
                possibleTiles = possibleTiles.filter((t) => t.edgeTypes[2] == 0);
            }
            // left
            cell =
                this.position.x - 1 >= 0
                    ? this.parent.cells[helpers.fromPos(this.position.x - 1, this.position.y, this.parent.width)]
                    : null;
            if (cell && cell.collapsed) {
                possibleTiles = possibleTiles.filter((t) => { var _a; return (_a = cell === null || cell === void 0 ? void 0 : cell.collapsed) === null || _a === void 0 ? void 0 : _a.validSiblings.right.includes(t); });
            }
            else if (!cell) {
                possibleTiles = possibleTiles.filter((t) => t.edgeTypes[3] == 0);
            }
            this.entropy = possibleTiles;
        }
    }
}
class Tiles {
    constructor() {
        this.tiles = [];
    }
    newTile(character, edgeTypes) {
        let t = new Tile(this, character, edgeTypes);
        this.tiles.push(t);
        return t;
    }
}
class Tile {
    constructor(parent, character, edgeTypes) {
        this.parent = parent;
        this.character = character;
        this.edgeTypes = edgeTypes;
        this.siblingsLength = 0;
        this._validSiblings = {
            up: [],
            right: [],
            down: [],
            left: []
        };
    }
    get validSiblings() {
        if (this.siblingsLength == this.parent.tiles.length)
            return this._validSiblings;
        else {
            this._validSiblings.up = this.parent.tiles.filter((t) => t.edgeTypes[2] === this.edgeTypes[0]);
            this._validSiblings.right = this.parent.tiles.filter((t) => t.edgeTypes[3] === this.edgeTypes[1]);
            this._validSiblings.down = this.parent.tiles.filter((t) => t.edgeTypes[0] === this.edgeTypes[2]);
            this._validSiblings.left = this.parent.tiles.filter((t) => t.edgeTypes[1] === this.edgeTypes[3]);
            return this._validSiblings;
        }
    }
}
new Main();