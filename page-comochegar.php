<!DOCTYPE html>
<html lang="pt">

<head>
    <title>The Form of Form | Trienal de Arquitetura de Lisboa</title>
    <meta charset="utf-8">
    <meta content="width=device-width" name="viewport">
    <link href="styles.css" rel="stylesheet" type="text/css">
    <link href="styleschegar.css" rel="stylesheet" type="text/css">
    <link href="favicon.ico" rel="icon" type="image/x-icon">
    <link rel="stylesheet" href="fontes/font-awesome/css/font-awesome.min.css">
    <link href="slick-1.6.0/slick-1.6.0/slick/slick.css" rel="stylesheet" type="text/css">
    <link href="slick-1.6.0/slick-1.6.0/slick/slick-theme.css" rel="stylesheet" type="text/css">
    <script src="jquery-3.2.1.min.js">
    </script>
    <script src="slick-1.6.0/slick-1.6.0/slick/slick.js" type="text/javascript">
    </script>
    <script src="mapa.js"></script>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDgcjtuWIuRLbnfMhItJYeMNonI2A6xHh0"></script>
     <script src="myscript.js"></script>

</head>

<body>
    <div id="tudo">
        <?php
		include 'header.html'
		?>
            <?php
		include 'slider.html'
		?>
        <p id="chegar-ancora"></p>
                <main>
                    <div id="chegar-page">
                        <h2 class="h2center">Chegar a Lisboa</h2>

                        <div id="chegarbuttons">
                            <a href="#pagchegar1">
                                <div class="icon" id="icon1"><img class="selectedbtn" id="imgchegar1" src="imagens/icons/chegar1.svg" alt="carro">
                                    <div class="button-chegar selectedbtn" id="button-chegar1">
                                        <p>De Carro</p>
                                    </div>
                                </div>
                            </a>

                            <a href="#pagchegar2">
                                <div class="icon" id="icon2"><img id="imgchegar2" src="imagens/icons/chegar2.svg" alt="carro">
                                    <div class="button-chegar" id="button-chegar2">
                                        <p>De Comboio</p>
                                    </div>
                                </div>
                            </a>

                            <a href="#pagchegar3">
                                <div class="icon" id="icon3"><img id="imgchegar3" src="imagens/icons/chegar3.svg" alt="carro">
                                    <div class="button-chegar" id="button-chegar3">
                                        <p>De Barco</p>
                                    </div>
                                </div>
                            </a>

                            <a href="#pagchegar4">
                                <div class="icon" id="icon4"><img id="imgchegar4" src="imagens/icons/chegar4.svg" alt="carro">
                                    <div class="button-chegar" id="button-chegar4">
                                        <p>De Avião</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="pag-chegar" id="pag-chegar1">
                            <div class="mapa" id="mapa1"></div>
                            <div id="cardiv">
                                <div class="chegardiv-text">
                                    <div class="chegar-content">
                                        <h3>De Carro</h3>
                                        <p>As melhores formas de entrar em Lisboa são a A1 e a A2, com ligações nacionais e ligações internacionais. A paisagem é belíssima e compensa as horas de condução.</p>
                                        <p id="indicacao">Calcule aqui o seu trajeto para Lisboa:</p>
                                        <input type="text" placeholder="Origem" id="origin">
                                        <div id="submit-map">
                                            <p>Calcular Rota</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="pag-chegar" id="pag-chegar2">
                            <div class="mapa" id="mapa2"></div>
                            <div id="comboiodiv">
                                <div class="chegardiv-text">
                                    <div class="chegar-content">
                                        <h3>De Comboio</h3>
                                        <p>Composições nacionais e internacionais chegam todos os dias a <span class="bold">Santa Apolónia</span>, muito próxima de todos os bairros tradicionais e do Terreiro do Paço. Mas se quiser juntar uma experiência arquitetónica única à sua chegada, opte por ficar na <span class="bold">Gare do Oriente.</span></p>
                                        <a target="_blank" href="https://www.cp.pt/passageiros/pt/consultar-horarios">
                                            <div id="button-chegar">
                                                <p>Consultar Comboios</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="pag-chegar" id="pag-chegar3">
                            <div class="mapa" id="mapa3"></div>
                            <div id="barcodiv">
                                <div class="chegardiv-text">
                                    <div class="chegar-content">
                                        <h3>De Barco</h3>
                                        <p>Quem chega de barco à cidade, tem uma das melhores vistas de Lisboa – a do rio – e pode atracar em 3 lugares distintos, todos eles próximos do centro. Se vier num navio-cruzeiro, pode ficar em <span class="bold">Alcântara, na Rocha Conde de Óbidos ou em Santa Apolónia.</span>Se vier a velejar no seu barco, existem várias <span class="bold">marinas</span> ao subir o rio.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="pag-chegar" id="pag-chegar4">
                            <div class="mapa" id="mapa4"></div>
                            <div id="aviaodiv">
                                <div class="chegardiv-text">
                                    <div class="chegar-content">
                                        <h3>De Avião</h3>
                                        <p>Aterra no <span class="bold">Aeroporto internacional de Lisboa</span>, que fica a uns meros 7 kms do centro da cidade. As principais companhias aéreas internacionais voam para cá, e, a apenas 3 horas de voo das principais capitais europeias, é muito fácil chegar.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div id="espacos">
                            <h2 class="h2center">Os vários locais</h2>
                            <p>A 4ª Edição do Trienal de Arquitetura de Lisboa decorre por toda a cidade, espalhado por vários espaços. </p>
                            <p>Descubra-os no mapa abaixo e não perca a oportunidade de colaborar no maior evento de arquitetura de Portugal.</p>
                            <div id="mapa5"></div>
                            <div id="numeros">
                            
                                <div class="numbloco">
                                    <img src="imagens/numeros/num1.png" alt="numero legenda">
                                    <p>Carlos Carvalho - Arte Contemporânea</p>
                                </div>
                                <div class="numbloco">
                                    <img src="imagens/numeros/num2.png" alt="numero legenda">
                                    <p>Casa Roque Gameiro</p>
                                </div>
                                <div class="numbloco">
                                    <img src="imagens/numeros/num3.png" alt="numero legenda">
                                    <p>Cinema Ideal</p>
                                </div>
                          
                            
                                <div class="numbloco">
                                    <img src="imagens/numeros/num4.png" alt="numero legenda">
                                    <p>Fundaçao Calouste Gulbenkian</p>
                                </div>
                                <div class="numbloco">
                                    <img src="imagens/numeros/num5.png" alt="numero legenda">
                                    <p>Garagem Sul - Centro Cultural de Belém</p>
                                </div>
                                <div class="numbloco">
                                    <img src="imagens/numeros/num6.png" alt="numero legenda">
                                    <p>Loja nord</p>
                                </div>
                            
                                <div class="numbloco">
                                    <img src="imagens/numeros/num7.png" alt="numero legenda">
                                    <p>MAAT</p>
                                </div>
                                <div class="numbloco">
                                    <img src="imagens/numeros/num8.png" alt="numero legenda">
                                    <p>MNAC</p>
                                </div>
                                <div class="numbloco">
                                    <img src="imagens/numeros/num9.png" alt="numero legenda">
                                    <p>Sede da Trienal de Lisboa</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </main>
        <?php
include 'footer.html'
?>
    </div>
</body>

</html>
