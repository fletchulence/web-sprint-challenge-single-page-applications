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


})

export default formSchema;