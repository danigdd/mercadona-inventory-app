const pool = require("./pool");

async function getAllProducts() {
    const {rows} = await pool.query("SELECT * FROM products");
    return rows;
}

async function getAllCategories() {
    const {rows} = await pool.query("SELECT * FROM categories");
    return rows;
}

async function deleteCategory(id) {
    await pool.query("DELETE FROM products WHERE category_id = $1", [id]);
    await pool.query("DELETE FROM categories WHERE id = $1", [id]);
    return;
}
module.exports = {getAllProducts, getAllCategories, deleteCategory};