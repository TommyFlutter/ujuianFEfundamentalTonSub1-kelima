class ImageFigure extends HTMLElement {
    constructor() {
      super();

      this.render();

      }
      render(){
   
      this.innerHTML =`
      <figure>
    <img src="./src/logo79thn.jpg">
    <figcaption>HUT RI ke-79, Nusantara Baru Indonesia Maju</figcaption>
      
</figure>
`;
      
    }
  }

  customElements.define('image-figure', ImageFigure);