* {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
 }

 body {
    background-color:red;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
 }

 .container {
    width: 80vw;
    max-width: 80%;
    background-color: beige;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    text-align: center;
 }

 .score {
    font-size: large;
    font-weight: bold;
 }
  
 #user-score {
    color: white;
 }
  
 #total-score {
    color: white;
 }

 .btn {
    font-size: large;
    font-weight: bold;
    background: black;
    border-radius: 4px;
    padding: 10px;
    color: beige;
    margin: 6px;
    cursor: pointer;
 }

 .options {
    padding: 10px;
    order: 3;
 }
  
 .controls {
    padding: 10px;
    order: 4;
 }

 .hide {
    display: none;
 }