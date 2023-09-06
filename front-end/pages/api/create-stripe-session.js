const stripe = require("stripe")('sk_test_51LtwQTSFCJh4OSw5xFmpwbhFDQTe8LMQctvsdZqpNqgyH48bMGjf47FASlI1l9MeBCo6tY15wv6DvsklSBu8rkKm00Qwx88fa6');
const CreateStripeSession = async(req,res)=>{
    const { item } = req.body;

  const redirectURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://stripe-checkout-next-js-demo.vercel.app';
console.log("body",item)
  const transformedItem =[{
    price_data: {
      currency: 'inr',
      product_data: {
    //   images: [item.image],
        name: item.name,
      },
      unit_amount: Math.round(item.price * 100),
    },
   //  description: item.description,
    quantity: item.quantity,
  }] 

  const session = await stripe.checkout.sessions.create({

    line_items: transformedItem,

    shipping_address_collection: { allowed_countries: ["IN"] },
    payment_method_types: ["card"],
    mode: "payment",

    // success_url: redirectURL + '?status=success',
    // cancel_url: redirectURL + '?status=cancel',
    success_url:"http://localhost:3000/success",
    cancel_url:"http://localhost:3000/failed",
    // metadata: {
    //   images: item.image,
    // },
  });

  res.json({ id: session.id });
}

export default CreateStripeSession;







/**
 * order controller
 */

//const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController("api::order.order", ({ strapi }) => ({
//   async create(ctx) {
//     // @ts-ignore
//     const { products } = ctx.request.body;
//     try {
//       const lineItems = await Promise.all(
//         products.map(async (product) => {
//           const item = await strapi
//             .service("api::product.product")
//             // @ts-ignore
//             .findOne(product.id);

//           console.log("this is item------->", item);
//           console.log("this is product------->", product);

//           return {
//             price_data: {
//               currency: "inr",
//               product_data: {
//                 name: item.name,
//               },
//               unit_amount: Math.round(item.price * 100),
//             },
//             quantity: product.quantity,
//           };
//         })
//       );

//       const session = await stripe.checkout.sessions.create({
//         shipping_address_collection: { allowed_countries: ["IN"] },
//         payment_method_types: ["card"],
//         mode: "payment",
//         success_url: process.env.CLIENT_URL + `/success`,
//         cancel_url: process.env.CLIENT_URL + "/failed",
//         line_items: lineItems,
//       });

//       await strapi
//         .service("api::order.order")
//          .create({ data: { products, stripeId: session.id } });
       

//       return { stripeSession: session };
//     } catch (error) {
//       ctx.response.status = 500;
//       return { error };
//     }
//   },
// }));


//  const handler=(req,res)=>{
//     createCoreController("api::order.order", ({ strapi }) => ({
//         async create(ctx) {
//           // @ts-ignore
//           const { products } = ctx.request.body;
        
//             const lineItems = await Promise.all(
//               products.map(async (product) => {
//                 const item = await strapi
//                   .service("api::product.product")
//                   // @ts-ignore
//                   .findOne(product.id);
      
//                 console.log("this is item------->", item);
//                 console.log("this is product------->", product);
      
//                 return {
//                   price_data: {
//                     currency: "inr",
//                     product_data: {
//                       name: item.name,
//                     },
//                     unit_amount: Math.round(item.price * 100),
//                   },
//                   quantity: product.quantity,
//                 };
//               })
//             );
      
//             const session = await stripe.checkout.sessions.create({
//               shipping_address_collection: { allowed_countries: ["IN"] },
//               payment_method_types: ["card"],
//               mode: "payment",
//               success_url: process.env.CLIENT_URL + `/success`,
//               cancel_url: process.env.CLIENT_URL + "/failed",
//               line_items: lineItems,
//             });
      
//             await strapi
//               .service("api::order.order")
//                .create({ data: { products, stripeId: session.id } });
             
      
//             return res.json({ stripeSession: session });
//           } 
        
//      }))

   

//  }
//  export default handler;