function mostrarMenu() {
    var opcion = 0;

				var figura = 0;
				var lado = 0;
				var radio = 0;
				var altura = 0;
				var area = 0;
                var vol = 0;

				while (true) {
					opcion = Number(
						prompt(
							"1 : Elige una figura entre Cubo, Esfera, y Cilindro\n" +
								"2 : Introduzca los parámetros necesarios\n" +
								"3 : Calcular Volumen\n" +
								"4 : Calcular Área\n" +
								"5 : Finalizar programa"
						)
					);

					switch (opcion) {
						case 1:
							figura = elegirFigura();
							alert("Has elegido " + figura);
							break;

						case 2:
							if (typeof figura === "undefined") {
								alert("Debes elegir una figura primero.");
							} else if (figura == 1) {
								lado = introducirValores(figura);
								alert(lado);
							} else if (figura == 2) {
								radio = introducirValores(figura);
								alert(radio);
							} else if (figura == 3) {
								[radio, altura] = introducirValores(figura);
								alert(radio);
								alert(altura);
							}
							break;

						case 3:
							vol = calcularVolumen(figura, lado, radio, altura);
							alert(vol);
							break;

						case 4:
							area = calcularArea(figura, lado, radio, altura);
							alert(area);
							break;

						case 5:
                            alert("Programa finalizado")
							break;

						default:
							alert("Opción no válida. Por favor, elige una opción válida.");
					}
				}
			}

			function elegirFigura() {
				var figura = Number(
					prompt("1 : Cubo\n" + "2 : Esfera\n" + "3 : Cilindro")
				);
				return figura;
			}

			function introducirValores(figura) {
				if (figura == 1) {
					var lado = Number(prompt("Introduzca el Lado del Cubo: "));
					return lado;
				} else if (figura == 2) {
					var radio = Number(prompt("Introduzca el Radio de la Esfera: "));
					return radio;
				} else if (figura == 3) {
					var radio = Number(prompt("Introduzca el Radio del Cilindro: "));
					var altura = Number(prompt("Introduzca la Altura del Cilindroo: "));
					return [radio, altura];
				} else {
					alert("Datos Incorrectos");
				}
			}

			function calcularVolumen(figura, lado, radio, altura) {
				if (figura == 1) {
					// Cálculo del volumen del cubo
                    var vol = (Math.pow(lado, 3));
				} else if (figura == 2) {
					// Cálculo del volumen de la esfera
                    var vol = (4/3) * Math.PI * (Math.pow(radio, 3));
				} else if (figura == 3) {
					// Cálculo del volumen del cilindro
                    var vol = Math.PI * (Math.pow(radio, 2)) * altura;
				}
                return vol;
			}

			function calcularArea(figura, lado, radio, altura) {
				if (figura == 1) {
                    // Cálculo del area del cubo
					var area = 6 * Math.pow(lado, 2); 
				} else if (figura == 2) {
                    // Cálculo del area de la esfera
					var area = 4 * Math.PI * Math.pow(radio, 2); 
				} else if (figura == 3) {
                    // Cálculo del area del cilindro
					var area = 2 * Math.PI * radio * (radio + altura); 
				}
                return area;
			}
            

			mostrarMenu();