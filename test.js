const body = document.body;

const sampleData = [
  { id: 1, type: "product", value: "Laptop Pro" },
  { id: 2, type: "category", value: "Electronics" },
  { id: 3, type: "product", value: "Smartphone 2023!" }, // Inválido (tiene "!")
  { id: 4, type: "category", value: "Gadgets123" }, // Inválido (tiene números)
  { id: 1, type: "product", value: "Tablet" }, // Duplicado (id=1)
];

const validateData = (data) => {
  const dataValid = [];
  const dataInvalid = [];
  const listId = [];

  const productPattern = /^[a-zA-Z0-9\s]+$/;
  const categoryPattern = /^[a-zA-Z]+$/;

  for (const item of data) {
    const { id, type, value } = item;

    //verifica si el ID ya fue procesado
    if (listId.includes(id)) {
      dataInvalid.push(item);
      continue; //salta a la siguiente iteracion
    }

    //registra el id como procesado
    listId.push(id);

    //continua con la validacion segun el type
    if (type.toLowerCase() == "category") {
      if (!categoryPattern.test(value)) {
        dataInvalid.push(item);
        continue;
      }
    } else {
      if (!productPattern.test(value)) {
        dataInvalid.push(item);
        continue;
      }
    }
    dataValid.push(item);
  }

  const result = {
    "✅ Valid objects ": dataValid,
    "❌ Invalid objects ": dataInvalid,
  };
  console.log(result); //muestra resultado en consola
  return result;
};
// When the function is called, the result is displayed on the right 👉

const resultValidateData = validateData(sampleData);
const paragraph = document.createElement("pre");
paragraph.textContent = JSON.stringify(resultValidateData,null,2);
body.appendChild(paragraph); //muestra resultado en html
