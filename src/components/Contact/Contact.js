import React, { useState } from "react";
import { db } from "../firebase";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { useSnackbar } from 'notistack';



const Contact = () => {

  const { enqueueSnackbar } = useSnackbar();

  const [email, setEmail] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        email: email,
      })
      .then(() => enqueueSnackbar('Seu email foi enviado :)'))

      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setEmail("");
  };

  return (
    <form class="footer_mail" onSubmit={handleSubmit}>
      <div class="form-group-material">
        <Input
          required
          placeholder="deixe seu email aqui"  
          id="email" 
          type="email" 
          inputProps={{ 'aria-label': 'email' }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div class="col-12">
        <Button
          type="submit"
          style={{ background: loader ? "rgb(204 204 204 / 0%)" : "#F84B12" }}
        >
          enviar
        </Button>
      </div>
    </form>
  );
};

export default Contact;
