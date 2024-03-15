# magico
create customisable buttons for your webpage directly from javascript.

Clone - https://github.com/MdAquib444/magico.git
Author - https://github.com/MdAquib444
## usage

```
// Find the specific div where you want to append the button
const containerDiv = document.getElementById('container');

// Create a custom button and append it to the container div
createCustomButton('Click Me', {
    styles: {
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: '5px'
    },
    onClick: () => {
        console.log('Button clicked!');
    },
    container: containerDiv // Specify the container div
});
```
### Improve ••Magico••