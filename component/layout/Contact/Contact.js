.contactContainer {
    height: 100vh;
    width: 100vw;
    max-width: 100%;
    display: grid;
    place-items: center;
    background-color: white;
    position: fixed;
  }
  
  .mailBtn {
    text-decoration: none;
    transform: translateX(-100vw);
    animation: mailBtnAnimation 2s forwards;
  }
  
  .mailBtn > button {
    text-decoration: none;
    font: 200 2vmax "Roboto";
    cursor: url("https://img.icons8.com/color/48/000000/edit--v2.png"), pointer;
    padding: 2vmax;
  }
  
  @keyframes mailBtnAnimation {
    to {
      transform: translateX(0);
    }
  }