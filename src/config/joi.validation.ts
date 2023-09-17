import * as Joi from 'joi';//Importamos el paquete

export const JoiValidationSchema = Joi.object({
    MONGODB: Joi.required(),//Validar que es obligatorio/requerido
    PORT: Joi.number().default(3005),//Validar que sea un número y si no existe que le de el valor de 3005
    DEFAULT_LIMIT: Joi.number().default(6)//Validar que sea un número y si no existe que le de el valor de 6
});
