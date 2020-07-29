function tabClickHandler(event) {

    //check if either the child of the tab or the tab was clicked
    let newFilename = (event.target.dataset.file === undefined) ?
        event.target.parentElement.dataset.file :
        event.target.dataset.file;

    for (button of document.getElementsByClassName('snippet-tab')) {
        if (button.dataset.file === newFilename) {
            button.classList.add("snippet-tab--active");
        } else {
            button.classList.remove("snippet-tab--active");
        }
    }
    for (data of document.getElementsByClassName('snippet-code-container')) {
        if (data.dataset.file === newFilename) {
            data.classList.remove("snippet-code-container--inactive");
        } else {
            data.classList.add("snippet-code-container--inactive");
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
