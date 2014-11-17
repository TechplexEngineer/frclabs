function setPageTitle(title) {
    if(title) {
        document.title = title;
    } else {
        document.title = getConfigVar('name');
    }
}
Handlebars.registerHelper("setTitle", setPageTitle);