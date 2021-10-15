import * as yup from "yup";

const formSchema = yup.object().shape({
   name: yup
      .string()
      .required()
      .min(2, 'name must be at least 2 characters'),
   size: yup
      .string()
      .required()
      .oneOf(['small', 'medium', 'large'], ' please select a size for you Za'),
   // submitBtn: yup
   //    .string()
   pepperoni: yup.boolean(),
   olives: yup.boolean(),
   chicken: yup.boolean(),
   pineapple: yup.boolean(),
   special: yup
      .string()
      .max(50, 'please keep your response below 50 characters'),

})

export default formSchema;