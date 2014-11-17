function getConfigVar(varname) {
	if (!varname) {
		console.log("ERROR: varname unset");
		return "";
	}
	return config.template_global[varname];
}
Template.registerHelper('getVar', getConfigVar);