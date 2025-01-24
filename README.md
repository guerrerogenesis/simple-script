### Descripción
Esta función validateData valida un arreglo de objetos con la siguiente estructura:

    -id: (número entero, único).
    -type: (cadena de texto, puede ser "product" o "category").
    -value: (cadena de texto que contiene el nombre de un producto o una categoría).


### Reglas de validación
    -ID único:
        La función verifica que no haya IDs duplicados en el arreglo.
        Si se encuentra un ID duplicado, el objeto se marca como inválido.
    
    -Validación de valores:
        Si el tipo es "product", el valor debe contener solo letras, números y espacios.
        Si el tipo es "category", el valor debe contener únicamente letras (sin números ni caracteres especiales).


### Resultados
La función devuelve un arreglo con los datos separados en dos categorías:

    -dataValid: Lista de objetos válidos.
    -dataInvalid: Lista de objetos inválidos.


### Uso
Recomiendo el uso de Live Server, una extension de Visual Studio Code para desplegar proyectos de manera sencilla en tu entorno local.
https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
