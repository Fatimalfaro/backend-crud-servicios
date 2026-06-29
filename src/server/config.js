import express from "express";
import cors from "cors";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

export default class Server{
    constructor(){
    //inicializar las popiedades del futuro objeto
    this.app = express();
    this.PORT = process.env.PORT || 3000; 
    }
    
    //DEFINIR METODOS
    listen() {
    this.app.listen(this.PORT, () => {
      console.info(`Servidor activo en http://localhost:${this.PORT}`);
    });
  }
}