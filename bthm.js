const categories = [
    "מחשבים ניידים/נייחים",
    "מקלדות",
    "עכברים",
    "כסאות",
    "שולחנות",
    "פד לעכבר",
    "אוזניות",
    "מיקרופונים"
];

function createCategoryMenu() {
    const menuContainer = document.getElementById('category-menu');
    const ul = document.createElement('ul');

    categories.forEach(category => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const categoryId = category.replace(/\s+/g, '-').toLowerCase();
        a.href = `category-${categoryId}.html`;
        a.textContent = category;
        li.appendChild(a);
        ul.appendChild(li);

        // Create a new HTML file for each category
        createCategoryPage(category, categoryId);
    });

    menuContainer.appendChild(ul);
}

function createCategoryPage(category, categoryId) {
    const content = `
<!DOCTYPE html>
<html lang="he">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${category} - T.M Computers</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body dir="rtl">
    <header>
        <h1>T.M Computers</h1>
        <nav id="category-menu"></nav>
    </header>
    <main>
        <h2>${category}</h2>
        <div id="product-list">
            <!-- Products will be dynamically added here -->
        </div>
    </main>
    <script src="script.js"></script>
</body>
</html>
    `;

    // In a real-world scenario, you'd use server-side code to create these files
    console.log(`Created category page: category-${categoryId}.html`);
    console.log(content);
}

document.addEventListener('DOMContentLoaded', createCategoryMenu);
