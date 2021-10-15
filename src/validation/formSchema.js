import * as yup from "yup";

// const toppings = {
//    pepperoni,
//    olives,
//    chicken,
//    pineapple
// }

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
   
   /* toppings.map((top, index)=>{

   })
 */

})

export default formSchema;