const URL = "https://mocki.io/v1/577cc7a3-07d6-4e14-b1b0-f62ef81f4699"
export async function searchProducts() {
    try {
        const res = await fetch(`${URL}`)
        const { Search } = await res.json()

        return Search?.map(products => ({
            id_: products.id,
            cod_: products.codigo,
            nom_: products.nombre,
            des_: products.descripcion,
            can_: products.cantidad,
            pre_: products.precio,
            catId: products.categoriaId,
            cat_: products.categoria,
            marId: products.marcaId,
            mar_: products.marca,
            unmId: products.unidadmediadId,
            uni_: products.unidadmedida,
            img_: products.imagen
        }))

    } catch (error) {
        throw new Error('Error al buscar productos')
    }
}