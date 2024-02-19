const trianglesGroup = document.getElementById("triangles");

const getRandomColor = () => {
  const colors = ["red", "blue", "green", "orange", "pink", "purple"];
  const randomIndex = Math.floor(Math.random() * 100) % colors.length;

  return colors[randomIndex];
};

const changeTrianglesColor = () => {
  const darkColor = getRandomColor();
  const lightColor = getRandomColor();

  document.documentElement.style.cssText = `
    --dark-color: ${darkColor};
    --light-color: ${lightColor};
    `;
};

trianglesGroup.addEventListener("click", changeTrianglesColor);
