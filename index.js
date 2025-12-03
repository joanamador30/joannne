function openModal(id) {
    document.getElementById(id).style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target === modal) closeModal(modal.id);
    });
};

function performSearch(event) {
    event.preventDefault();
    const query = document.getElementById("searchQuery").value;
    window.open("https://www.google.com/search?q=" + encodeURIComponent(query), "_blank");
}
