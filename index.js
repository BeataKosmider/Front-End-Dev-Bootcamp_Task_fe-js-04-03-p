const getInputValue = (node) => {
  const value = node?.getAttribute("value");

  if (node?.hasAttribute("value")) {
    return value;
  } else {
    return null;
  }

  // Zaimplementuj zadanie zgodnie z wytycznymi
};

module.exports = getInputValue;
