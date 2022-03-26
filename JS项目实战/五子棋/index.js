function $(select) {
  return document.querySelector(select);
}
function $$(select) {
  return document.querySelectorAll(select);
}
let row = 10;
let col = 10;
let count = 0;
initcheckerboard(row, col);
// 创建一个10行10列的棋盘
function initcheckerboard(row, col) {
  for (let i = 0; i < row; i++) {
    let oTr = document.createElement("tr");
    for (let j = 0; j < col; j++) {
      let oTd = document.createElement("td");
      oTd.setAttribute("data-row", i);
      oTd.setAttribute("data-line", j);
      oTr.appendChild(oTd);
    }
    checkerBard.appendChild(oTr);
  }
}
function createChess(e) {
  if (e.target.localName === "td") {
    let oDiv = document.createElement("div");
    oDiv.className = "chess";
    // let tdClientWidth = e.target.clientWidth;
    // let tdClientHeight = e.target.clientHeight;
    let halfWidth = e.target.clientWidth / 2;
    let haflHeight = e.target.clientHeight / 2;
    let positionX = 0;
    let positionY = 0;
    if (e.offsetX > halfWidth) {
      positionX = 1;
    }
    if (e.offsetY > haflHeight) {
      positionY = 1;
    }
    chessPutContainer(e.target, positionX, positionY, oDiv);
  }
}
/**
 *
 * @param {*} ele
 * @param {*} x
 * @param {*} y
 * @param {*} chess
 */
function chessPutContainer(ele, offsetX = 0, offsetY = 0, chess) {
  let dataRow = ele.getAttribute("data-row") * 1;
  let dataLine = ele.getAttribute("data-line") * 1;
  let putCol = dataLine + offsetX;
  let putRow = dataRow + offsetY;
  chess.setAttribute("data-row", putRow);
  chess.setAttribute("data-line", putCol);
  let maxputChess = 1;
  if (putRow === row) {
    putRow = row - 1;
    putCol = putCol;
    chess.style.top = "50%";
  }
  if (putCol === col) {
    putRow = putRow;
    putCol = col - 1;
    chess.style.left = "50%";
  }
  if (putRow > row && putCol > col) {
    putRow = row - 1;
    putCol = col - 1;
    chess.style.top = "50%";
    chess.style.left = "50%";
  }
  if (dataLine === col - 1 || dataRow === row - 1) {
    maxputChess = 2;
  }
  if (dataRow === row - 1 && dataLine === col - 1) {
    maxputChess = 4;
  }

  let container = $(`td[data-row='${putRow}'][data-line='${putCol}']`);
  for (const ch of container.children) {
    if (
      ch.getAttribute("data-row") == dataRow + offsetY &&
      ch.getAttribute("data-line") == dataLine + offsetX
    ) {
      return;
    }
  }
  count++;
  if (count % 2 === 0) {
    chess.classList.add("white");
    chess.innerText = count;
  } else {
    chess.classList.add("black");
    chess.innerText = count;
  }
  container.appendChild(chess);
  isWiner(1, putCol, putRow);
}
function checkDirection(curDiscChessArray) {
  let whitecount = 0;
  let blackcount = 0;
  for (const ch of curDiscChessArray) {
    if (ch.className === "chess white") {
      whitecount++;
      blackcount = 0;
      if (whitecount == 5) {
        return true;
      }
    } else if (ch.className === "chess black") {
      whitecount = 0;
      blackcount++;
      if (blackcount == 5) {
        return true;
      }
    }
  }
  return false;
}
function isWiner(role, x, y) {
  let curRowChess = $$(`div[data-row='${y}']`);
  let curColChess = $$(`div[data-line='${x}']`);
  let rightTopChess = [].filter.call($$(`tr div`), function (ele, i) {
    if (x + y === ele.dataset.row * 1 + ele.dataset.line * 1) {
      return ele;
    }
  });
  let leftTopChess = [].call($$(`tr div`)).forEach((element) => {});
  console.log(rightTopChess, leftTopChess);
  // checkDirection(curRowChess);
  // checkDirection(curColChess);
}

checkerBard.addEventListener("click", createChess);
