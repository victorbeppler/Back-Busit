import ValidateUserExist from "../use-case/validate-user-exist.js";
import validador from "email-validator";

export class UserLoginController {
  async handle(req, res) {
    const data = req.body;
    console.log(data);
    const validateEmail = validador.validate(data.email);
    if (!validateEmail) return res.status(400).send("Email invalid");
    const validateUserExist = await new ValidateUserExist().execute(
      data.email,
      data.password
    );
    console.log(validateUserExist);
    if (validateUserExist === true) {
      console.log("Usuário logado com sucesso");
      return res.status(200).send("User logged");
    }
    if (validateUserExist === "User don't exists") {
      console.log("Usuário não existe");
      return res.status(400).send("User don't exists");
    }
    if (validateUserExist === "User duplicated") {
      console.log("Usuário duplicado");
      return res.status(400).send("User duplicated");
    }
  }
}
