function tabClickHandler(event) {
    const newFilename = event.target.dataset.filename;
    for (button of document.getElementsByClassName('snippet-tab')) {
        if (button.dataset.filename === newFilename) {
            button.classList.add("selected");
        } else {
            button.classList.remove("selected");
        }
    }
    for (data of document.getElementsByClassName('snippet-file-data')) {
        if (data.dataset.filename === newFilename) {
            data.classList.remove("hidden");
        } else {
            data.classList.add("hidden");
        }
    }
}

for (fileButton of document.getElementsByClassName("snippet-tab")) {
    fileButton.addEventListener('click', tabClickHandler);
}
