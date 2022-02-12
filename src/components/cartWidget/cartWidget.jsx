const CartWidget = () => {
    return <img class="img" src='data:image/jpeg;base64,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' alt="CARRITO" />;
  };
  export default CartWidget;






