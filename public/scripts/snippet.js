function tabClickHandler(event) {
    const newFilename = event.target.dataset.filename;
    for (button of document.getElementsByClassName('snippet-tab')) {
        if (button.dataset.filename === newFilename) {
            button.classList.add("selected-tab");
        } else {
            button.classList.remove("selected-tab");
        }
    }
    for (data of document.getElementsByClassName('snippet-file-data')) {
        if (data.dataset.filename === newFilename) {
            data.classList.remove("hidden-snippet");
        } else {
            data.classList.add("hidden-snippet");
        }
    }
}

for (fileButton of document.getElementsByClassName("snippet-tab")) {
    fileButton.addEventListener('click', tabClickHandler);
}
