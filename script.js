document.addEventListener("DOMContentLoaded", function() {
    const htmlEditor = document.getElementById("html-editor");
    const cssEditor = document.getElementById("css-editor");
    const jsEditor = document.getElementById("js-editor");
    const previewFrame = document.getElementById("preview-frame");
    const fileInput = document.getElementById("file-input");

    function updatePreview() {
        const htmlCode = htmlEditor.value;
        const cssCode = "<style>" + cssEditor.value + "</style>";
        const jsCode = "<script>" + jsEditor.value + "</script>";
        const fullCode = "<html><head>" + cssCode + "</head><body>" + htmlCode + "</body>" + jsCode + "</html>";
        const previewDocument = previewFrame.contentWindow.document;
        previewDocument.open();
        previewDocument.write(fullCode);
        previewDocument.close();
    }

    function loadFileContent(file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const content = e.target.result;
            const extension = file.name.split(".").pop().toLowerCase();
            
            switch(extension) {
                case "html":
                    htmlEditor.value = content;
                    break;
                case "css":
                    cssEditor.value = content;
                    break;
                case "js":
                    jsEditor.value = content;
                    break;
                default:
                    alert("Formato de archivo no compatible.");
            }

            updatePreview();
        };

        reader.readAsText(file);
    }

    htmlEditor.addEventListener("input", updatePreview);
    cssEditor.addEventListener("input", updatePreview);
    jsEditor.addEventListener("input", updatePreview);

    fileInput.addEventListener("change", function(event) {
        const file = event.target.files[0];
        loadFileContent(file);
    });

    // Actualizar la vista previa al cargar la página
    updatePreview();
});





