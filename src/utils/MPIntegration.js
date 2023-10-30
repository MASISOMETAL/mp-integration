import { ACCESS_TOKEN } from "../../config.json"

export const handleIntegrationMP = async (celSelect) => {
    const { name, imagen, price} = celSelect
    const preferencia = {
        "items": [
            {
                "title": name,
                "description": `Compra de celular ${name}`,
                "picture_url": imagen,
                "category_id": "cells",
                "quantity": 1,
                "currency_id": "$",
                "unit_price": price
            }
        ]
    }

    try {
        const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(preferencia)
        })

        const data = await response.json()

        return data.init_point
        
    } catch (error) {
        console.log(error)
    }
}