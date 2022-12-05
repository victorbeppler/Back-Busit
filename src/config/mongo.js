import mongoose from "mongoose";

export default async function mongoSetup() {
  try {
    await mongoose.connect(
      "mongodb+srv://root:zkh3jDsajuOIcDdz@busit.qw1uqco.mongodb.net/Busit?retryWrites=true&w=majority"
    );
    console.log("MongoDB Conectado com Sucesso");
  } catch (error) {
    console.log("Erro ao Conectar ao MongoDB: ", error);
  }
}
