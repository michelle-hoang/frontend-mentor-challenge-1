import React from "react";
// create stylesheet

function ProductCard() {
  return (
    <div>
      <div
        style={{
          border: "2px solid white",
          width: "21.4475rem",
          height: "38.1875rem",
          backgroundColor: "#FFFFFF",
          borderRadius: "0.625rem",
          color: "black",
        }}
      >
        <div
          style={{
            backgroundColor: "#cce6ff",
            height: "50%",
          }}
        >
          <p>Image Goes Here</p>
        </div>
        <div>
          <p>Details</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
