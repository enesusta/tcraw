module.exports = output => {
    const resources = [];
    output.forEach((e) => {
        e = e.trim();
        e = e.replace('<source src="', "");
        e = e.replace(' type="audio/mpeg"/>', " ");
        e = e.substring(1, e.length - 2);
        e = "https:/" + e;
        if (!e.includes("tureng"))
            return;
        resources.push(e);
    });
    return resources;
}