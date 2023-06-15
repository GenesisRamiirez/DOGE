var Fecha = rowValues[colFecha-1];
var Nombre = rowValues[colNombre-1];
var Mail = rowValues[colMail-1];
var inflama = rowValues[colinflama-1];
var NV = rowValues[colNV-1];
var CA = rowValues[colCA-1];
var Acidez = rowValues[colAcidez-1];
var EF = rowValues[colEF-1];
var Comezon = rowValues[colComezon-1];
var SMH = rowValues[colSMH-1];
var DificultadPP = rowValues[colDificultadPP-1];
var VA = rowValues[colVA-1];
var Antojo = rowValues[colAntojo-1];
var Ansiedad = rowValues[colAnsiedad-1];
var Dificultadbajar = rowValues[colDificultadbajar-1];
var Sensibilidad = rowValues[colSensibilidad-1];
var PerdidaCabello = rowValues[colPerdidaCabello-1];
var PielS = rowValues[colPielS-1];
var Apatia = rowValues[colApatia-1];
var Fatiga = rowValues[colFatiga-1];
var Inquietud = rowValues[colInquietud-1];
var Insomnio = rowValues[colInsomnio-1];
var distraccion = rowValues[coldistraccion-1];
var Tartamudeo = rowValues[colTartamudeo-1];
var DifiCogniti = rowValues[colDifiCogniti-1];
var matema = rowValues[colmatema-1];
var escolar = rowValues[colescolar-1];
var Decisiones = rowValues[colDecisiones-1];
var Miedo = rowValues[colMiedo-1];
var Irritable = rowValues[colIrritable-1];
var Triste = rowValues[colTriste-1];
var Infecciones = rowValues[colInfecciones-1];
var Orinar = rowValues[colOrinar-1];
var F = rowValues[colF-1];
var CG = rowValues[colCG-1];
var DolorArti = rowValues[colDolorArti-1];
var Articulaciones = rowValues[colArticulaciones-1];
var Muscular = rowValues[colMuscular-1];
var To = rowValues[colTo-1];
var Gargant = rowValues[colGargant-1];
var DGarganta = rowValues[colDGarganta-1];
var Llagas = rowValues[colLlagas-1];
var Lengua = rowValues[colLengua-1];
var Nasa = rowValues[colNasa-1];
var SR = rowValues[colSR-1];
var Latidos = rowValues[colLatidos-1];
var esterol = rowValues[colColesterol-1];
var Bradi = rowValues[colBradi-1];
var Carie = rowValues[colCarie-1];
var Acn = rowValues[colAcn-1];
var ComezonP = rowValues[colComezonP-1];
var Rubores = rowValues[colRubores-1];
var Picazon = rowValues[colPicazon-1];
var Rojo = rowValues[colRojo-1];
var Ojeras = rowValues[colOjeras-1];
var Cabeza = rowValues[colCabeza-1];
var Mareos = rowValues[colMareos-1];
var Total = rowValues[colTotal-1];

Fecha
Nombre
Mail
inflama
NV
CA
Acidez
EF
Comezon
SMH
DificultadPP
VA
Antojo
Ansiedad
Dificultadbajar
Sensibilidad
PerdidaCabello
PielS
Apatia
Fatiga
Inquietud
Insomnio
distraccion
Tartamudeo
DifiCogniti
matema
escolar
Decisiones
Miedo
Irritable
Triste
Infecciones
Orinar
F
CG
DolorArti
Articulaciones
Muscular
To
Gargant
DGarganta
Llagas
Lengua
Nasa
SR
Latidos
esterol
Bradi
Carie
Acn
ComezonP
Rubores
Picazon
Rojo
Ojeras
Cabeza
Mareos
Total


doc.getBody().replaceText("{{fecha}}", Fecha);
doc.getBody().replaceText("{{nombre}}", Nombre);
doc.getBody().replaceText("{{fecha_nacimiento}}",FechaN);
doc.getBody().replaceText("{{edad}}",edad);
doc.getBody().replaceText("{{sexo}}",Sexo);
doc.getBody().replaceText("{{estado_civil}}",EstadoC); 
doc.getBody().replaceText("{{nivel_educativo}}",NivelE); 
doc.getBody().replaceText("{{profesion}}",Profesion); 
doc.getBody().replaceText("{{direccion}}",Direccion); 
doc.getBody().replaceText("{{telefono}}",Telefono);
doc.getBody().replaceText("{{email}}",email); 
doc.getBody().replaceText("{{MC}}",Mc); 
doc.getBody().replaceText("{{EA}}",Enfermedades); 
doc.getBody().replaceText("{{ED}}",Ed); 
doc.getBody().replaceText("{{HED}}",Hed);
doc.getBody().replaceText("{{TomasMedicamento}}",TomasMedicamento);
doc.getBody().replaceText("{{DED}}",Dosis); 
doc.getBody().replaceText("{{desde}}",Desde); 
doc.getBody().replaceText("{{ingiere}}",Ingieres);
doc.getBody().replaceText("{{IQ}}",IQ); 
doc.getBody().replaceText("{{AF}}",AF); 
doc.getBody().replaceText("{{EE}}",EE); 
doc.getBody().replaceText("{{AO}}",Anti);
doc.getBody().replaceText("{{DAO}}",AntiDosis);
doc.getBody().replaceText("{{MP}}",EM); 
doc.getBody().replaceText("{{TH}}",RH); 
doc.getBody().replaceText("{{DTH}}",RHDOSIS);
doc.getBody().replaceText("{{OPQ}}",OPQ); 
doc.getBody().replaceText("{{HAM}}",HD); 
doc.getBody().replaceText("{{HPM}}",HDPM);
doc.getBody().replaceText("{{HSP}}",HSP);
doc.getBody().replaceText("{{insomnio}}",SI); 
doc.getBody().replaceText("{{PD}}",PD); 
doc.getBody().replaceText("{{AR}}",Actividades);
doc.getBody().replaceText("{{intensidad}}",Intensidad);
doc.getBody().replaceText("{{ejercicio}}",Ejercicio);
doc.getBody().replaceText("{{frecuencia}}",Frecuencia); 
doc.getBody().replaceText("{{duracion}}",Duracion); 
doc.getBody().replaceText("{{inicio}}",Inicio); 
doc.getBody().replaceText("{{GI}}",GradoIntensidad);
doc.getBody().replaceText("{{periodo}}",Periodo);
doc.getBody().replaceText("{{medidas}}",MAP); 
doc.getBody().replaceText("{{consulta}}",CN); 
doc.getBody().replaceText("{{suplemento}}",Suplemento); 
doc.getBody().replaceText("{{alcohol}}",Alcohol);
doc.getBody().replaceText("{{tabaco}}",Tabaco);
doc.getBody().replaceText("{{cafe}}",Cafe);
doc.getBody().replaceText("{{PA}}",PA); 
doc.getBody().replaceText("{{CPD}}",CPD); ; 
doc.getBody().replaceText("{{CC}}",CC); 
doc.getBody().replaceText("{{CF}}",CF); 
doc.getBody().replaceText("{{CFS}}",CFF); ;
doc.getBody().replaceText("{{prepara}}",PTA); ;
doc.getBody().replaceText("{{otras}}",CR); 
doc.getBody().replaceText("{{que}}",Come);
doc.getBody().replaceText("{{modificado}}",MA); 
doc.getBody().replaceText("{{apetito}}",Apetito);  
doc.getBody().replaceText("{{hambre}}",Hambre); 
doc.getBody().replaceText("{{fav}}",AP); 
doc.getBody().replaceText("{{ANA}}",ANA); 
doc.getBody().replaceText("{{AM}}",AM); 
doc.getBody().replaceText("{{Alergico}}",Alergico);
doc.getBody().rejplaceText("{{Complemento}}",Complemento); 
doc.getBody().replaceText("{{DosisRazon}}",DosisRazon); 
doc.getBody().replaceText("{{Varia}}",Varia); 
doc.getBody().replaceText("{{Dieta}}",Dieta); 
doc.getBody().replaceText("{{Tipo}}",Tipo); 
doc.getBody().replaceText("{{Tiempo}}",Tiempo); 
doc.getBody().replaceText("{{Objetivo}}",Objetivo); 
doc.getBody().replaceText("{{Apego}}",Apego); 
doc.getBody().replaceText("{{Resultados}}",Resultados); 
doc.getBody().replaceText("{{Bajar}}",Bajar); 
doc.getBody().replaceText("{{Desayuno}}",Desayuno); 
doc.getBody().replaceText("{{MeriendaAm}}",MeriendaAm); 
doc.getBody().replaceText("{{Almuerzo}}",Almuerzo); 
doc.getBody().replaceText("{{Meriendapm}}",Meriendapm); 
doc.getBody().replaceText("{{Cena}}",Cena); 
doc.getBody().replaceText("{{Meriendanoc}}",Meriendanoc); 
doc.getBody().replaceText("{{Agua}}",Agua);
doc.getBody().replaceText("{{Cambios}}",Cambios);