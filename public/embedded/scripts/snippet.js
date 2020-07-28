function tabClickHandler(event) {

    //check if either the child of the tab or the tab was clicked
    let newFilename = (event.target.dataset.filename === undefined) ?
        event.target.parentElement.dataset.filename :
        event.target.dataset.filename;

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

function collapseExpandToggleHandler(event) {
    for (header of document.getElementsByClassName('snippet-header')) {
        header.classList.toggle("snippet-header--collapsed");
    }
    for (lineNumber of document.getElementsByClassName('snippet-line-number')) {
        lineNumber.classList.toggle('snippet-line-number--collapsed');
    }
    for (collapseExpandButton of document.getElementsByClassName('snippet-collapse-expand')) {
        collapseExpandButton.textContent = (collapseExpandButton.textContent === 'Expand') ? 'Collapse' : 'Expand';
    }
    event.target.dataset.expanded = (event.target.dataset.expanded === 'false') ? 'true' : 'false';
}

for (collapseExpandButton of document.getElementsByClassName("snippet-collapse-expand")) {
    collapseExpandButton.addEventListener('click', collapseExpandToggleHandler);
}
