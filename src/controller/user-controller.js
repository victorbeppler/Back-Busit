import CreateUser from "../use-case/create-user.js";
import ValidateUserExist from "../use-case/validate-user-exist.js";
import Validator from "email-validator";

export default class UserController {
  async handle(req, res) {
    const data = req.body;
    const validateEmail = Validator.validate(data.email);
    if (!validateEmail) return res.status(400).send("Email invalid");
    const validateUserExist = await new ValidateUserExist().execute(data.email);
    if (validateUserExist) {
      console.log("Email já cadastrado");
      return res.status(400).send("User already exists");
    } else {
      const createUser = new CreateUser().execute(data);
      if (createUser) {
        console.log("Usuário criado com sucesso");
        return res.status(201).send("User created");
      }
    }
  }
}
