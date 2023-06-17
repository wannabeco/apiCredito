import https from "https";
import express from "express";
import fs from "fs";
import cors from "cors";

const options = {
    key:fs.readFileSync('./config/key.pem'),
    cert:fs.readFileSync('./config/cert.pem')
}

const first = fs.readFileSync('./config/ca.key','utf-8');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.text());

//para el logueo
app.post('/login',(req,res)=>{
    const salida = {mensaje:"Usuario conectado con exito",continuar:1,datos:{idUsuario:1,nombre:"Farez Prieto",email:"kyo20052@gmail.com"}}
    res.send(salida);
});

//USUARIOS
app.get('/buscaUsuarios/:busqueda',(req,res)=>{
  const salida = {mensaje:"Lista de usuarios encontrados",continuar:1,datos:[{idUsuario:1,nombres:"Farez Prieto",idPerfil:1,nombrePerfil:"Administrador",codigoAcceso:"2132"}]}
  res.send(salida);
});
app.post('/guardaUsuarios',(req,res)=>{
  console.log(req.body);
  const salida = {mensaje:"Usuario agregado de manera exitosa",continuar:1,datos:[]}
  res.send(salida);
});
app.patch('/editaUsuarios',(req,res)=>{
  console.log(req.body);
  const salida = {mensaje:"El usuario se ha editado de manera exitosa",continuar:1,datos:[]}
  res.send(salida);
});

app.delete('/eliminaUsuario/:idUsuario',(req,res)=>{
  //respuesta correcta
  const salida = {mensaje:"El usuario se ha eliminado de manera exitosa",continuar:1,datos:[]}
  //respuesta de error
  //const salida = {mensaje:"El usuario no se ha podido eliminar, intente de nuevo más tarde",continuar:0,datos:[]}
  res.send(salida);
});


//LISTADOS GENERALES
//listado de tipos de documentos
app.get('/getTiposDocumento',(req,res)=>{

  //lista de documentos
  const tiposDocumento = [
    {
      idTipoDocumento:1,
      nombreTipoDocumento:'Cédula'
    },
    {
      idTipoDocumento:2,
      nombreTipoDocumento:'Pasaporte'
    },
  ]
  //respuesta correcta
  const salida = {mensaje:"Listado de tipos de documento",continuar:1,datos:tiposDocumento}
  //respuesta de error
  //const salida = {mensaje:"El usuario no se ha podido eliminar, intente de nuevo más tarde",continuar:0,datos:[]}
  res.send(salida);
});

//listado de paises
app.get('/getPaises',(req,res)=>{
  const paises = [
    {
      idPais:1,
      nombrePais:'Colombia'
    },
    {
      idPais:2,
      nombrePais:'Venezuela'
    },
    {
      idPais:3,
      nombrePais:'Panamá'
    }
  ];

  //respuesta correcta
  const salida = {mensaje:"Listado de paises",continuar:1,datos:paises}
  //respuesta de error
  //const salida = {mensaje:"No hay paises para consultar",continuar:0,datos:[]}
  res.send(salida);

});
//listado de ciudades por país
app.get('/getCiudades/:idPais',(req,res)=>{
  const ciudades = [
    {
      idCiudad:1,
      idPais:1,
      nombreCiudad:'Bogotá'
    },
    {
      idCiudad:2,
      idPais:1,
      nombreCiudad:'Cali'
    },
    {
      idCiudad:3,
      idPais:1,
      nombreCiudad:'Manizalez'
    },
    {
      idCiudad:4,
      idPais:2,
      nombreCiudad:'Caracas'
    },
    {
      idCiudad:5,
      idPais:2,
      nombreCiudad:'Maracaibo'
    },
    {
      idCiudad:6,
      idPais:3,
      nombreCiudad:'San Miguelito'
    },
    {
      idCiudad:7,
      idPais:3,
      nombreCiudad:'Tocumen'
    }
  ];
  const dataSalida = [];
  const resultado = ciudades.find(data => data.idPais == req.params.idPais);
  dataSalida.push(resultado);
  //respuesta correcta
  const salida = {mensaje:"Listado de ciudades",continuar:1,datos:dataSalida}
  //respuesta de error
  //const salida = {mensaje:"No hay ciudades para consultar",continuar:0,datos:[]}
  res.send(salida);

});



//EMPRESAS
app.get('/getEmpresas',(req,res)=>{
  const empresas = [
    {
      idEmpresa:1,
      razonSocial:"Empresa 1",
      nombreRepresentante:"Jhon",
      apellidosRepresentante:"Puerto",
      pais:1,
      ciudad:2,
      estado:"1",
      tipoDocumento:"1",
      documento:"1234456",
      fechaCorte:"2023-01-01",
      contabiliza:"1",
      manejaIva:"1",
      empresaAsignada:"1",
      comision:"1",
      direccion:"Calle falsa 123",
      precioUnidad:"20000",
      codigoArea:"057",
      movil:"311478900",
      emailEmpresa:"jhonato@wannabe.com.co",
      generarContrato:1,
      numeroContrato:"CXC0000",
      fechaContrato:"2023-01-01",
      codigoAccesoEmpresa:"bbbbb",
      contrasenaEmpresa:"",
      codigoAccesoR:""
      },
      {
        idEmpresa:2,
        razonSocial:"Empresa 2",
        nombreRepresentante:"Jhon",
        apellidosRepresentante:"Puerto",
        pais:2,
        ciudad:4,
        estado:"1",
        tipoDocumento:"1",
        documento:"1234456",
        fechaCorte:"2023-01-01",
        contabiliza:"1",
        manejaIva:"1",
        empresaAsignada:"1",
        comision:"1",
        direccion:"Calle falsa 123",
        precioUnidad:"20000",
        codigoArea:"057",
        movil:"311478900",
        emailEmpresa:"jhonato@wannabe.com.co",
        generarContrato:1,
        numeroContrato:"CXC0000",
        fechaContrato:"2023-01-01",
        codigoAccesoEmpresa:"aaaaa",
        contrasenaEmpresa:"",
        codigoAccesoR:""
      }
  ];

  const salida = {mensaje:"Lista de empresas",continuar:1,datos:empresas}
  res.send(salida);
});

app.get('/buscarEmpresa/:busqueda',(req,res)=>{
  const empresas = [
    {
      idEmpresa:1,
      razonSocial:"Prueba",
      nombreRepresentante:"Jhon",
      apellidosRepresentante:"Puerto",
      pais:"1",
      ciudad:"1",
      estado:"1",
      tipoDocumento:1,
      documento:"1234456",
      fechaCorte:"2023-01-01",
      contabiliza:"1",
      manejaIva:"0",
      empresaAsignada:1,
      comision:"1",
      direccion:"Calle falsa 123",
      precioUnidad:"20000",
      codigoArea:"057",
      movil:"311478900",
      emailEmpresa:"jhonato@wannabe.com.co",
      generarContrato:1,
      numeroContrato:"CXC0000",
      fechaContrato:"2023-01-01",
      codigoAccesoEmpresa:"aaaaa",
      contrasenaEmpresa:"",
      codigoAccesoR:""
      }
  ];
  const salida = {mensaje:"Lista de empresas encontradas",continuar:1,datos:empresas}
  res.send(salida);
});
app.post('/guardaEmpresa',(req,res)=>{
  console.log(req.body);
  const salida = {mensaje:"La empresa se ha agregado de manera exitosa",continuar:1,datos:[]}
  res.send(salida);
});
app.patch('/editaEmpresa',(req,res)=>{
  console.log(req.body);
  const salida = {mensaje:"La empresa se ha editado de manera exitosa",continuar:1,datos:[]}
  res.send(salida);
});
app.delete('/eliminaEmpresa/:idUsuario',(req,res)=>{
  //respuesta correcta
  const salida = {mensaje:"La empresa se ha eliminado de manera exitosa",continuar:1,datos:[]}
  //respuesta de error
  //const salida = {mensaje:"El usuario no se ha podido eliminar, intente de nuevo más tarde",continuar:0,datos:[]}
  res.send(salida);
});



//ADMINISTRACIÓN DE CIUDADES
app.get('/buscarCiudades/:busqueda',async (req,res) => {

  const ciudades = [
    {
      idCiudad:1,
      idPais:1,
      nombrePais:'Colombia',
      nombreCiudad:'Bogotá',
      gmt:'Hola Mundo'
    }
  ];

  //respuesta correcta
  const salida = {mensaje:"Ciudad encontrada con la búsqueda",continuar:1,datos:ciudades}
  //respuesta incorecta
  //const salida = {mensaje:"No hay ciudades con la busqueda realizada",continuar:0,datos:[]}
  res.send(salida);
});


app.post('/guardaCiudad',(req,res)=>{
  console.log(req.body);
  const salida = {mensaje:"La ciudad se ha agregado de manera exitosa",continuar:1,datos:[]}
  res.send(salida);
});
app.patch('/editaCiudad',(req,res)=>{
  console.log(req.body);
  const salida = {mensaje:"La ciudad se ha editado de manera exitosa",continuar:1,datos:[]}
  res.send(salida);
});
app.delete('/eliminaCiudad/:idCiudad',(req,res)=>{
  //respuesta correcta
  const salida = {mensaje:"La ciudad se ha eliminado de manera exitosa",continuar:1,datos:[]}
  //respuesta de error
  //const salida = {mensaje:"la ciudad no se ha podido eliminar, intente de nuevo más tarde",continuar:0,datos:[]}
  res.send(salida);
});




//lista de menus
app.get('/getMenu/:idUsuario',(req, res)=>{
    const dataMenu = [
        {
          idGrupo:"0",
          nombreGrupo:"Opciones fijas",
          icono:"fa fa-gear",
          opciones:[
            {idModulo:100,nombre:"Desempeño",icono:"fa fa-persons",visibleAlIniciar:1,activa:1},
            {idModulo:101,nombre:"Liq. Diaria",icono:"fa fa-gear",visibleAlIniciar:1,activa:0},
            {idModulo:102,nombre:"Liq. Periodos",icono:"fa fa-gear",visibleAlIniciar:1,activa:0},
            {idModulo:103,nombre:"Consolidados",icono:"fa fa-gear",visibleAlIniciar:1,activa:0}
          ]
        },
        {
          idGrupo:"1",
          nombreGrupo:"Grupo 1",
          icono:"fa fa-gear",
          opciones:[
            {idModulo:1,nombre:"Gestión vendedores",icono:"fa fa-persons",visibleAlIniciar:0,activa:0},
            {idModulo:2,nombre:"Gestión clientes",icono:"fa fa-gear",visibleAlIniciar:0,activa:0},
            {idModulo:3,nombre:"Ingresos",icono:"fa fa-gear",visibleAlIniciar:0,activa:0},
            {idModulo:4,nombre:"Egresos",icono:"fa fa-gear",visibleAlIniciar:0,activa:0},
            {idModulo:17,nombre:"Gestión empresas",icono:"fa fa-gear",visibleAlIniciar:0,activa:0}
          ]
        },
        {
          idGrupo:"2",
          nombreGrupo:"Grupo 2",
          icono:"fa fa-gear",
          opciones:[
            {idModulo:5,nombre:"Importar rutas",icono:"fa fa-gear",visibleAlIniciar:0,activa:0},
            {idModulo:6,nombre:"Gestión de usuarios",icono:"fa fa-gear",visibleAlIniciar:0,activa:0},
            {idModulo:7,nombre:"Cambio de fechas",icono:"fa fa-gear",visibleAlIniciar:0,activa:0},
            {idModulo:8,nombre:"Facturas",icono:"fa fa-gear",visibleAlIniciar:0,activa:0}
              ]
        },
        {
          
          idGrupo:"3",
          nombreGrupo:"Grupo 3",
          icono:"fa fa-gear",
          opciones:[
            {idModulo:9,nombre:"Liq Empleados",icono:"fa fa-gear",visibleAlIniciar:0,activa:0},
            {idModulo:10,nombre:"Const gastos",icono:"fa fa-gear",visibleAlIniciar:0,activa:0},
            {idModulo:11,nombre:"Caja gral",icono:"fa fa-gear",visibleAlIniciar:0,activa:0},
            {idModulo:12,nombre:"Auditoría",icono:"fa fa-gear",visibleAlIniciar:0,activa:0},
            {idModulo:14,nombre:"Apertura general",icono:"fa fa-gear",visibleAlIniciar:0,activa:0}
          ]
        },
        {
          
          idGrupo:"4",
          nombreGrupo:"Grupo 4",
          icono:"fa fa-gear",
          opciones:[
            {idModulo:15,nombre:"Crear cajas",icono:"fa fa-gear",visibleAlIniciar:0,activa:0},
            {idModulo:16,nombre:"Cajas seguros",icono:"fa fa-gear",visibleAlIniciar:0,activa:0},
            {idModulo:18,nombre:"Gestión ciudades",icono:"fa fa-gear",visibleAlIniciar:0,activa:0}
          ]
        }
      ];

    const salida = {mensaje:"Data del menú consultada",continuar:1,datos:dataMenu}
    res.send(salida);
});



// const server = https.createServer(options, app);

// server.listen(3000, () => { console.log('listening on 3000') });

const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log('CORS-enabled web server listening on port 80')
})