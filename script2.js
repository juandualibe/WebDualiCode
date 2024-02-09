document.getElementById("download-project").addEventListener("click", function() {
    const htmlCode = document.getElementById("html-editor").value;
    const cssCode = document.getElementById("css-editor").value;
    const jsCode = document.getElementById("js-editor").value;
    const fullCode = "<html><head><style>" + cssCode + "</style></head><body>" + htmlCode + "<script>" + jsCode + "</script></body></html>";

    const blob = new Blob([fullCode], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "proyecto.zip"; // Nombre del archivo
    a.click();
    URL.revokeObjectURL(url);
});

