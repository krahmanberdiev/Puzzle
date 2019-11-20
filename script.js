const arr = [
    [1,1,1],
    [1,1,1],
    [1,1,0]
  ];
  // Get All boxes
  const boxes = document.querySelectorAll(".box");
  
  // Move
  const moveBox = (e) => {
    let id = e.target.getAttribute('data-key'); // '02'
    let row = Number(id[0]); //0
    let col = Number(id[1]);//2

    //left
    if(col > 0 && !arr[row][col-1]){ // 10
      arr[row][col-1] = 1 ;
      arr[row][col] = 0;
      e.target.style.left = e.target.offsetLeft - 100 + 'px';
      const newId = `${row}${col-1}`;
      e.target.setAttribute('data-key', newId);

      //right
    } else if(col<arr.length-1 && !arr[row][col+1]) { // 12
      arr[row][col+1] = 1;
      arr[row][col] = 0;
      e.target.style.left = e.target.offsetLeft + 100 + 'px';
      const newId = `${row}${col+1}`;
      e.target.setAttribute('data-key', newId);

      //top
    } else if(row > 0 && !arr[row-1][col]) { // 01
      arr[row-1][col] = 1;
      arr[row][col] = 0;
      e.target.style.top = e.target.offsetTop - 100 + 'px';
      const newId = `${row-1}${col}`;
      e.target.setAttribute('data-key', newId);

      //bottom
    } else if(row < arr.length-1 && !arr[row+1][col]) { // 21
      arr[row+1][col] = 1;
      arr[row][col] = 0;
      e.target.style.top = e.target.offsetTop + 100 + 'px';
      const newId = `${row+1}${col}`;
      e.target.setAttribute('data-key', newId);
    }
  }
  
  // Add an eventListener for each box
  boxes.forEach(el => {
    el.addEventListener("click", moveBox)
  })
  