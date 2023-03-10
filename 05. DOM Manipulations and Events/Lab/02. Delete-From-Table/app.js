function deleteByEmail() {
    const input = document.querySelector('input[name="email"]');
    const table = Array.from(document.querySelector('tbody').children);
    let removed = false;
    for (const line of table) {
        if (line.children[1].textContent == input.value) {
            line.remove();
            removed = true;
        }
    }
    input.value = '';
    if (removed) {
        document.getElementById('result').textContent = 'Deleted.';
    } else {
        document.getElementById('result').textContent = 'Not found.';
    }
}