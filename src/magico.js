function createCustomButton(text, options) {
    const button = document.createElement('button');
    button.textContent = text;
       
    // Apply custom styles or classes
    if (options && options.styles) {
        Object.assign(button.style, options.styles);
    }
       
    // Add event listeners or other interactive behaviors
    if (options && options.onClick) {
        button.addEventListener('click', options.onClick);
    }
       
    // Append button to a specified container or to the document body
    if (options && options.container) {
        options.container.appendChild(button);
    } else {
        document.body.appendChild(button);
    }
       
    return button;
}