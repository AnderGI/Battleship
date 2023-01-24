const shipValuesAlignement = (elementTextContent) => {
    let obj = null;
    switch (elementTextContent){
      case "Vertical":
        obj = {
          alignement: "Vertical"
        }
        break;
      case "Horizontal":
        obj = {
          alignement: "Horizontal"
        }
        break;
    }
    return obj;
  }

  // eslint-disable-next-line no-undef
  module.exports = shipValuesAlignement;