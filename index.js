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

//LOGIN
app.get('/login/:usuario/:clave',(req,res)=>{
    const dataLogin = {
      usua_idusua:1,
      usua_nombre:'Jhon Puerto',
      usua_codigo:'12345',
      usua_imei:'2323233',
      usua_idperf:'1',
      usua_clave:'',
      usua_idempr:1,
      usua_idven:1,
      usua_estado:1,
      usua_vigen:'',
      usua_facven:'1',
      usua_idempre:1,
      usua_version:1,
      usua_fechaf:'2023-02-01',
      usua_pass:'',
      usua_acceso:'',
      usua_opc:'',
      usua_chpwd:''
    }
    const salida = {mensaje:"Usuario conectado con exito",continuar:1,datos:dataLogin}
    res.send(salida);
});
//USUARIOS
app.get('/usuarios/:busqueda',(req,res)=>{
  const dataUsuario = [{
    usua_idusua:1,
    usua_nombre:'Jhon Puerto',
    usua_codigo:'12345',
    usua_imei:'2323233',
    usua_idperf:'1',
    perf_nombre:'Admin',
    usua_clave:'',
    usua_idempr:1,
    usua_idven:1,
    usua_estado:1,
    usua_vigen:'',
    usua_facven:'1',
    usua_idempre:1,
    usua_version:1,
    usua_fechaf:'2023-02-01',
    usua_pass:'',
    usua_acceso:'',
    usua_opc:'',
    usua_chpwd:''
  }];
  const salida = {mensaje:"Lista de usuarios encontrados",continuar:1,datos:dataUsuario}
  res.send(salida);
});
app.post('/usuarios',(req,res)=>{
  console.log(req.body);
  const salida = {mensaje:"Usuario agregado de manera exitosa",continuar:1,datos:[]}
  res.send(salida);
});
app.put('/usuarios',(req,res)=>{
  console.log(req.body);
  const salida = {mensaje:"El usuario se ha editado de manera exitosa",continuar:1,datos:[]}
  res.send(salida);
});
app.delete('/usuarios/:idUsuario',(req,res)=>{
  //respuesta correcta
  const salida = {mensaje:"El usuario se ha eliminado de manera exitosa",continuar:1,datos:[]}
  //respuesta de error
  //const salida = {mensaje:"El usuario no se ha podido eliminar, intente de nuevo más tarde",continuar:0,datos:[]}
  res.send(salida);
});


//LISTADOS GENERALES

//listado de tipos de documentos
app.get('/tiposDocumento',(req,res)=>{

  //lista de documentos
  const tiposDocumento = [
    {
      tido_idtido:1,
      tido_nombre:'Cédula',
      tido_siigo:'CC'
    },
    {
      tido_idtido:2,
      tido_nombre:'Pasaporte',
      tido_siigo:'PA'
    }
  ]
  //respuesta correcta
  const salida = {mensaje:"Listado de tipos de documento",continuar:1,datos:tiposDocumento}
  //respuesta de error
  //const salida = {mensaje:"El usuario no se ha podido eliminar, intente de nuevo más tarde",continuar:0,datos:[]}
  res.send(salida);
});
//listado de persiles
app.get('/perfiles',(req,res)=>{

  //lista de documentos
  const tiposDocumento = [
    {
      perf_idperf:1,
      perf_nombre:'Administrador',
      perf_descri:'Administrador del sistema'
    },
    {
      perf_idperf:2,
      perf_nombre:'Vendedor',
      perf_descri:'Vendedor del sistema'
    },
  ]
  //respuesta correcta
  const salida = {mensaje:"Listado de tipos de documento",continuar:1,datos:tiposDocumento}
  //respuesta de error
  //const salida = {mensaje:"El usuario no se ha podido eliminar, intente de nuevo más tarde",continuar:0,datos:[]}
  res.send(salida);
});


//ENDPOINTS EMPRESAS
app.get('/empresas',(req,res)=>{
  const empresas = [
    {
      empr_idempr:1,
      empr_razon:'Wannabe Digital',
      empr_tipodocume:1,
      empr_docume:'111111111',
      empr_rutalo:'',
      empr_colorhe:'',
      empr_colorme:'',
      empr_colorbtn:'',
      empr_digive:'',
      empr_telefo:'',
      empr_movil:'311455677',
      empr_email:'desarrollo@wannabe.com.co',
      empr_nombres:'Farez',
      empr_apellidos:'Prieto',
      empr_idtido:1,
      empr_direc:'Calle falsa 1233',
      empr_estado:1,
      empr_idpais:1,
      empr_idciud:1,
      empr_caja:'',
      empr_aviso:'',
      empr_contrato:'aaaaa',
      empr_num:'aaaa',
      empr_fecha:'2023-12-01',
      empr_rutacon:'',
      empr_logo:'',
      empr_idrefe:1,
      empr_iva:1,
      empr_idrazon:1,
      empr_codarea:'04',
      empr_print:'',
      empr_send:'',
      empr_preciounidad:'20000',
      empr_fechacontrato:'2022-01-01',
      empr_generarContrato:1,
      empr_comision:1,
      empr_codigoAccesoEmpresa:'',
      empr_contrasenaEmpresa:'',
      empr_codigoAccesoR:''
    },
    {
      empr_idempr:1,
      empr_razon:'Jhon Programmer',
      empr_tipodocume:1,
      empr_docume:'111111111',
      empr_rutalo:'',
      empr_colorhe:'',
      empr_colorme:'',
      empr_colorbtn:'',
      empr_digive:'',
      empr_telefo:'',
      empr_movil:'311455677',
      empr_email:'desarrollo@jp.com.co',
      empr_nombres:'Jhon',
      empr_apellidos:'Puerto',
      empr_idtido:1,
      empr_direc:'Calle falsa 1233',
      empr_estado:1,
      empr_idpais:1,
      empr_idciud:1,
      empr_caja:'',
      empr_aviso:'',
      empr_contrato:'aaaaa',
      empr_num:'aaaa',
      empr_fecha:'2023-12-01',
      empr_rutacon:'',
      empr_logo:'',
      empr_idrefe:1,
      empr_iva:1,
      empr_idrazon:1,
      empr_codarea:'04',
      empr_print:'',
      empr_send:'',
      empr_preciounidad:'20000',
      empr_fechacontrato:'2022-01-01',
      empr_generarContrato:1,
      empr_comision:1,
      empr_codigoAccesoEmpresa:'',
      empr_contrasenaEmpresa:'',
      empr_codigoAccesoR:''
    }
  ];

  const salida = {mensaje:"Lista de empresas",continuar:1,datos:empresas}
  res.send(salida);
});
app.get('/empresas/:busqueda',(req,res)=>{
  const empresas = [
    {
      empr_idempr:1,
      empr_razon:'Jhon Programmer',
      empr_tipodocume:1,
      empr_docume:'111111111',
      empr_rutalo:'',
      empr_colorhe:'',
      empr_colorme:'',
      empr_colorbtn:'',
      empr_digive:'',
      empr_telefo:'',
      empr_movil:'311455677',
      empr_email:'desarrollo@jp.com.co',
      empr_nombres:'Jhon',
      empr_apellidos:'Puerto',
      empr_idtido:1,
      empr_direc:'Calle falsa 1233',
      empr_estado:1,
      empr_idpais:1,
      empr_idciud:1,
      empr_caja:'',
      empr_aviso:'',
      empr_contrato:'aaaaa',
      empr_num:'aaaa',
      empr_fecha:'2023-12-01',
      empr_rutacon:'',
      empr_logo:'',
      empr_idrefe:1,
      empr_iva:1,
      empr_idrazon:1,
      empr_codarea:'04',
      empr_print:'',
      empr_send:'',
      empr_preciounidad:'20000',
      empr_fechacontrato:'2022-01-01',
      empr_generarContrato:1,
      empr_comision:1,
      empr_codigoAccesoEmpresa:'',
      empr_contrasenaEmpresa:'',
      empr_codigoAccesoR:''
    }
  ];
  const salida = {mensaje:"Lista de empresas encontradas",continuar:1,datos:empresas}
  res.send(salida);
});
app.post('/empresas',(req,res)=>{
  console.log(req.body);
  const salida = {mensaje:"La empresa se ha agregado de manera exitosa",continuar:1,datos:[]}
  res.send(salida);
});
app.put('/empresas',(req,res)=>{
  console.log(req.body);
  const salida = {mensaje:"La empresa se ha editado de manera exitosa",continuar:1,datos:[]}
  res.send(salida);
});
app.delete('/empresas/:idUsuario',(req,res)=>{
  //respuesta correcta
  const salida = {mensaje:"La empresa se ha eliminado de manera exitosa",continuar:1,datos:[]}
  //respuesta de error
  //const salida = {mensaje:"El usuario no se ha podido eliminar, intente de nuevo más tarde",continuar:0,datos:[]}
  res.send(salida);
});



// ENDPOINTS ADMINISTRACIÓN DE CIUDADES
app.get('/ciudades/palabraClave/:busqueda',async (req,res) => {

  const ciudades = [
    {
      ciud_idciud:1,
      ciud_idpais:1,
      ciud_nombre:'Bogotá',
      ciud_gtm:'Bo000'
    }
  ];

  //respuesta correcta
  const salida = {mensaje:"Ciudad encontrada con la búsqueda",continuar:1,datos:ciudades}
  //respuesta incorecta
  //const salida = {mensaje:"No hay ciudades con la busqueda realizada",continuar:0,datos:[]}
  res.send(salida);
});
//listado de ciudades por país
app.get('/ciudades/porPais/:idPais',(req,res)=>{
  const ciudades = [
    {
      ciud_idciud:1,
      ciud_idpais:1,
      ciud_nombre:'Bogotá',
      ciud_gtm:'Bo000'
    },
    {
      ciud_idciud:2,
      ciud_idpais:1,
      ciud_nombre:'Cali',
      ciud_gtm:'000'
    },
    {
      ciud_idciud:3,
      ciud_idpais:1,
      ciud_nombre:'Manizalez',
      ciud_gtm:'Maniz000'
    },
    {
      ciud_idciud:4,
      ciud_idpais:2,
      ciud_nombre:'Caracas',
      ciud_gtm:'Car000'
    },
    {
      ciud_idciud:5,
      ciud_idpais:2,
      ciud_nombre:'Maracaibo',
      ciud_gtm:'Marac000'
    },
    {
      ciud_idciud:6,
      ciud_idpais:3,
      ciud_nombre:'San Miguelito',
      ciud_gtm:'San Migue000'
    },
    {
      ciud_idciud:7,
      ciud_idpais:3,
      ciud_nombre:'Tocumen',
      ciud_gtm:'Toc000'
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
app.post('/ciudades',(req,res)=>{
  console.log(req.body);
  const salida = {mensaje:"La ciudad se ha agregado de manera exitosa",continuar:1,datos:[]}
  res.send(salida);
});
app.put('/ciudades',(req,res)=>{
  console.log(req.body);
  const salida = {mensaje:"La ciudad se ha editado de manera exitosa",continuar:1,datos:[]}
  res.send(salida);
});
app.delete('/ciudades/:idCiudad',(req,res)=>{
  //respuesta correcta
  const salida = {mensaje:"La ciudad se ha eliminado de manera exitosa",continuar:1,datos:[]}
  //respuesta de error
  //const salida = {mensaje:"la ciudad no se ha podido eliminar, intente de nuevo más tarde",continuar:0,datos:[]}
  res.send(salida);
});

//ENDPOINTS ADMINISTRACIÓN DE PAISES
app.get('/paises',(req,res)=>{
  const paises = [
    {
      pais_idpais:1,
      pais_nombre:"Colombia",
      pais_codarea:"057",
      pais_convenio:""
    },
    {
      pais_idpais:2,
      pais_nombre:"Venezuela",
      pais_codarea:"057",
      pais_convenio:""
    },
    {
      pais_idpais:3,
      pais_nombre:"Panamá",
      pais_codarea:"057",
      pais_convenio:""
    }
  ];

  //respuesta correcta
  const salida = {mensaje:"Listado de paises",continuar:1,datos:paises}
  //respuesta de error
  //const salida = {mensaje:"No hay paises para consultar",continuar:0,datos:[]}
  res.send(salida);

});
app.get('/paises/:busqueda',async (req,res) => {

  const paises = [
    {
      pais_idpais:1,
      pais_nombre:"Colombia",
      pais_codarea:"057",
      pais_convenio:""
    }
  ];

  //respuesta correcta
  const salida = {mensaje:"País encontrado con la búsqueda",continuar:1,datos:paises}
  //respuesta incorecta
  //const salida = {mensaje:"No hay ciudades con la busqueda realizada",continuar:0,datos:[]}
  res.send(salida);
});
app.post('/paises',(req,res)=>{
  console.log(req.body);
  const salida = {mensaje:"El país se ha agregado de manera exitosa",continuar:1,datos:[]}
  res.send(salida);
});
app.put('/paises',(req,res)=>{
  console.log(req.body);
  const salida = {mensaje:"La país se ha editado de manera exitosa",continuar:1,datos:[]}
  res.send(salida);
});
app.delete('/paises/:idPais',(req,res)=>{
  //respuesta correcta
  const salida = {mensaje:"La país se ha eliminado de manera exitosa",continuar:1,datos:[]}
  //respuesta de error
  //const salida = {mensaje:"El país no se ha podido eliminar, intente de nuevo más tarde",continuar:0,datos:[]}
  res.send(salida);
});

//lista de menus
app.get('/menu/:idUsuario',(req, res)=>{
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
            {idModulo:18,nombre:"Gestión ciudades",icono:"fa fa-gear",visibleAlIniciar:0,activa:0},
            {idModulo:19,nombre:"Gestión paises",icono:"fa fa-gear",visibleAlIniciar:0,activa:0}
          ]
        }
      ];

    const salida = {mensaje:"Data del menú consultada",continuar:1,datos:dataMenu}
    res.send(salida);
});



//SALIDA
const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log('CORS-enabled web server listening on port 80')
})