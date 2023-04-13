var cuentas = [
  { nombre: "Mali", saldo: 200, password: "1234" },
  { nombre: "Gera", saldo: 290, password: "5678" },
  { nombre: "Maui", saldo: 67, password: "9012" },
];

// Función para obtener el índice de la cuenta en el arreglo
function obtenerIndiceCuenta(nombreCuenta) {
  for (var i = 0; i < cuentas.length; i++) {
    if (cuentas[i].nombre === nombreCuenta) {
      return i;
    }
  }
  return -1; // Si no se encuentra la cuenta, devuelve -1
}

// Función para validar la contraseña
function validarPassword(password) {
  return cuentaActual.password === password;
}

// Función para consultar el saldo
function consultarSaldo() {
  alert("Su saldo actual es de $" + cuentaActual.saldo);
}

// Función para ingresar dinero
function ingresarDinero() {
  var monto = prompt("Ingrese el monto a ingresar:");
  monto = parseFloat(monto);
  if (isNaN(monto)) {
    alert("Monto inválido. Ingrese un número.");
    return;
  }
  if (monto <= 0) {
    alert("Monto inválido. Ingrese un número positivo.");
    return;
  }
  if (cuentaActual.saldo + monto > 990) {
    alert("No se puede ingresar más de $990.");
    return;
  }
  cuentaActual.saldo += monto;
  alert("Ha ingresado $" + monto + " en su cuenta. Su nuevo saldo es de $" + cuentaActual.saldo);
}

// Función para retirar dinero
function retirarDinero() {
  var monto = prompt("Ingrese el monto a retirar:");
  monto = parseFloat(monto);
  if (isNaN(monto)) {
    alert("Monto inválido. Ingrese un número.");
    return;
  }
  if (monto <= 0) {
    alert("Monto inválido. Ingrese un número positivo.");
    return;
  }
  if (cuentaActual.saldo - monto < 10) {
    alert("No se puede retirar más de $" + (cuentaActual.saldo - 10) + ".");
    return;
  }
  cuentaActual.saldo -= monto;
  alert("Ha retirado $" + monto + " de su cuenta. Su nuevo saldo es de $" + cuentaActual.saldo);
}

// Inicio de la interacción con el cajero
var nombreCuenta = prompt("Ingrese el nombre de su cuenta (Mali, Gera, Maui):");
var indiceCuenta = obtenerIndiceCuenta(nombreCuenta);
while (indiceCuenta === -1) {
  nombreCuenta = prompt("Cuenta no encontrada. Ingrese el nombre de su cuenta (Mali, Gera, Maui):");
  indiceCuenta = obtenerIndiceCuenta(nombreCuenta);
}
var cuentaActual = cuentas[indiceCuenta];
var password = prompt("Ingrese su contraseña:");
var intentos = 1;
while (!validarPassword(password)) {
  intentos++;
  if (intentos > 3) {
    alert("Ha excedido el número de intentos. Su tarjeta ha sido bloqueada.");
    break;
  }
  password = prompt("Contraseña incorrecta. Ingrese la contraseña de nuevo:");
}
if (validarPassword(password)) {
var opcion = prompt("Bienvenido/a, " + cuentaActual.nombre + ". Seleccione una opción:\n1. Consultar saldo\n2. Ingresar dinero\n3. Retirar dinero");
opcion = parseInt(opcion);
while (opcion < 1 || opcion > 3 || isNaN(opcion)) {
opcion = prompt("Opción inválida. Seleccione una opción:\n1. Consultar saldo\n2. Ingresar dinero\n3. Retirar dinero");
opcion = parseInt(opcion);
}
switch (opcion) {
case 1:
consultarSaldo();
break;
case 2:
ingresarDinero();
break;
case 3:
retirarDinero();
break;
}
}