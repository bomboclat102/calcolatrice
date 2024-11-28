let matrice = [];
for (let i = 0; i < 4; i++) {
  matrice[i] = [];
  for (let j = 0; j < 4; j++) {
    matrice[i][j] = Math.floor(Math.random() * 100);
  }
}

function display() {
  let z = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      document.getElementById("num" + (z + 1)).textContent = matrice[i][j];
      z++;
    }
  }
}
function foward() {
  let fuori = [
    matrice[0][0],
    matrice[0][1],
    matrice[0][2],
    matrice[0][3],
    matrice[1][3],
    matrice[2][3],
    matrice[3][3],
    matrice[3][2],
    matrice[3][1],
    matrice[3][0],
    matrice[2][0],
    matrice[1][0],
  ];
  fuori.push(fuori.shift());
  [
    matrice[0][0],
    matrice[0][1],
    matrice[0][2],
    matrice[0][3],
    matrice[1][3],
    matrice[2][3],
    matrice[3][3],
    matrice[3][2],
    matrice[3][1],
    matrice[3][0],
    matrice[2][0],
    matrice[1][0],
  ] = fuori;
  let dentro = [matrice[1][1], matrice[1][2], matrice[2][2], matrice[2][1]];
  dentro.unshift(dentro.pop());
  [matrice[1][1], matrice[1][2], matrice[2][2], matrice[2][1]] = dentro;
  display();
}
function backwards() {
  let fuori = [
    matrice[0][0],
    matrice[0][1],
    matrice[0][2],
    matrice[0][3],
    matrice[1][3],
    matrice[2][3],
    matrice[3][3],
    matrice[3][2],
    matrice[3][1],
    matrice[3][0],
    matrice[2][0],
    matrice[1][0],
  ];
  fuori.unshift(fuori.pop());
  [
    matrice[0][0],
    matrice[0][1],
    matrice[0][2],
    matrice[0][3],
    matrice[1][3],
    matrice[2][3],
    matrice[3][3],
    matrice[3][2],
    matrice[3][1],
    matrice[3][0],
    matrice[2][0],
    matrice[1][0],
  ] = fuori;
  let dentro = [matrice[1][1], matrice[1][2], matrice[2][2], matrice[2][1]];
  dentro.push(dentro.shift());
  [matrice[1][1], matrice[1][2], matrice[2][2], matrice[2][1]] = dentro;

  display();
}

display();
