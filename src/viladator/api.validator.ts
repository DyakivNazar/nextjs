import Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).required().messages({
        "string.pattern.base": "Brand must be a string and max 20 chars",
    }),

    price: Joi.number().min(0).max(1000000).required().messages({
        "string.min": "price can be at least 0 chars",
        "string.max": "price cannot be gt 1000000 chars",
    }),

    year: Joi.number().min(1990).max(2025).required().messages({
        "string.min": "min year must be 1990",
        "string.max": "max year must be 2025",
    }),

})