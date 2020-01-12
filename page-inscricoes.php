<!DOCTYPE html>
<html lang="pt">

<head>
    <title>The Form of Form | Trienal de Arquitetura de Lisboa</title>
    <meta charset="utf-8">
    <meta content="width=device-width" name="viewport">
    <link href="styles.css" rel="stylesheet" type="text/css">
    <link href="stylesinscricoes.css" rel="stylesheet" type="text/css">
    <link href="favicon.ico" rel="icon" type="image/x-icon">
    <link rel="stylesheet" href="fontes/font-awesome/css/font-awesome.min.css">
    <link href="slick-1.6.0/slick-1.6.0/slick/slick.css" rel="stylesheet" type="text/css">
    <link href="slick-1.6.0/slick-1.6.0/slick/slick-theme.css" rel="stylesheet" type="text/css">
    <script src="jquery-3.2.1.min.js">


    </script>
    <script src="slick-1.6.0/slick-1.6.0/slick/slick.js" type="text/javascript"></script>
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
                <main>
                    <div id="inscricoes">
                        <h3>Inscrições</h3>
                        <p class="insctext">Os colaboradores The Form of Form têm a enriquecedora experiência de fazer parte de um evento cultural de referência.</p>
                        <p id="insctext2">Não perca a oportunidade de contactar de perto com os nossos conteúdos e participantes, entre criadores, curadores e críticos. <span class="bold">Inscreva-se!</span></p>

                        <form>

                            <div class="input left">
                                <label id="label01">
						<i class="fa fa-user"></i>
					</label>
                                <input id="input01" type="text" placeholder="Primeiro Nome">

                            </div>

                            <div class="input right">
                                <input class="no-label" type="text" placeholder="Apelidos">

                            </div>

                            <div class="input left">
                                <label id="label02">
						<i class="fa fa-calendar"></i>
					</label>
                                <input id="input02" type="text" placeholder="Data de nascimento">

                            </div>

                            <div class="input right">
                                <label id="label03">
						<i class="fa  fa-language"></i>
					</label>
                                <input id="input03" type="text" placeholder="Idioma">
                            </div>

                            <div class="input left grande">
                                <label id="label04">
						<i class="fa fa-home"></i>
					</label>
                                <input id="input04" type="text" placeholder="Morada">

                            </div>

                            <div class="input right pequeno">
                                <input class="no-label" type="text" placeholder="Código-Postal">

                            </div>

                            <div class="input left">
                                <label id="label05">
						<i class="fa fa-envelope"></i>
					</label>
                                <input id="input05" type="email" placeholder="Email">

                            </div>

                            <div class="input right">
                                <label id="label06">
						<i class="fa  fa-phone"></i>
					</label>
                                <input id="input06" type="text" placeholder="Contacto telefónico">
                            </div>

                            <div id="opcoes">
                                <label id="label2">
						<i class="fa fa-ticket"></i>
					</label>
                                <select class="input2 right" name="Bilhetes">
                                <option selected disabled value="familiar">Tipo de bilhete</option>
    <option value="familiar">Familiar</option>
    <option value="grupo">Grupo</option>
    <option value="individual">Individual</option>
    <option value="escola">Escola</option>
  </select></div>

                            <div class="input right pequeno2">
                                <input id="input07" type="text" placeholder="Nº de adultos">
                            </div>

                            <div class="input right pequeno2">
                                <input id="input08" type="text" placeholder="Nº de crianças">
                            </div>

                            <div class="checkboxes">
                                <div class="opcao"><input type="checkbox" id="c1" name="cc" />
                                    <label for="c1"><span class="square"></span >Bilhete Geral <span class="explicacao">( acesso a todas as exposições )</span></label>
                                    <p class="preco">200€</p>
                                </div>

                                <div class="opcao margin-left"><input type="checkbox" id="c2" name="cc" />
                                    <label for="c2"><span class="square"></span>4 Exposições Principais</label>
                                    <p class="preco">105€</p>
                                </div>

                                <div class="opcao"><input type="checkbox" id="c3" name="cc" />
                                    <label for="c3"><span class="square"></span>Exposições Satélite</label>
                                    <p class="preco">40€</p>
                                </div>

                                <div class="opcao margin-left"><input type="checkbox" id="c4" name="cc" />
                                    <label for="c4"><span class="square"></span>Exposição "A Forma da Forma"</label>
                                    <p class="preco">45€</p>
                                </div>

                                <div class="opcao"><input type="checkbox" id="c5" name="cc" />
                                    <label for="c5"><span class="square"></span>Exposição "Obra"</label>
                                    <p class="preco">35€</p>
                                </div>

                                <div class="opcao margin-left"><input type="checkbox" id="c6" name="cc" />
                                    <label for="c6"><span class="square"></span>Exposição "O Mundo nos nossos olhos"</label>
                                    <p class="preco">40€</p>
                                </div>

                                <div class="opcao"><input type="checkbox" id="c7" name="cc" />
                                    <label for="c7"><span class="square"></span>Exposição "Sines: Logística à beira mar"</label>
                                    <p class="preco">30€</p>
                                </div>

                                <div class="opcao margin-left"><input type="checkbox" id="c8" name="cc" />
                                    <label for="c8"><span class="square"></span>Conferência "Talk talk talk"</label>
                                    <p class="preco">30€</p>
                                </div>

                                <div class="opcao"><input type="checkbox" id="c9" name="cc" />
                                    <label for="c9"><span class="square"></span>Outra(s) ( favor especificar abaixo )</label></div>

                            </div>
                            <div id="maisinfo">
                        
                            <textarea rows="6" placeholder="Informações adicionais"></textarea>
                            <label id="label4">
						<i class="fa  fa-info"></i>
					</label>
                            </div>
                            
                            <input type="submit" value="Inscrever" />
                        </form>
                    </div>

                    <div id="colaborar">
                        <h3>Programa de Amigos da Trienal</h3>
                        <p class="insctext">Apoie as actividades da Trienal de Lisboa ao juntar-se ao nosso Programa de Amigos e conseguindo descontos adicionais nas conferências Talk, Talk, Talk e nas publicações da Trienal. </p>
                        <p id="insctext3">Ao tornar-se Amigo da Trienal estará a fazer uma significativa contribuição para o nosso trabalho e receberá convites exclusivos, prioridade em reservas, bilhetes com desconto e gratuitos e outras ofertas.<span class="bold"> Adira ao programa de Amigos da Trienal:</span></p>
                        
                        <form id="form2">

                            <div class="input left">
                                <label class="labelcolaborar" id="labelcolaborar01">
						<i class="fa fa-user"></i>
					</label>
                                <input class="inputcolaborar" id="inputcolaborar01" type="text" placeholder="Primeiro Nome">

                            </div>

                            <div class="input right">
                                <input class="no-label" type="text" placeholder="Apelidos">

                            </div>

                            <div class="input left">
                                <label class="labelcolaborar" id="labelcolaborar02">
						<i class="fa fa-calendar"></i>
					</label>
                                <input class="inputcolaborar" id="inputcolaborar02" type="text" placeholder="Data de nascimento">

                            </div>

                            <div class="input right">
                                <label class="labelcolaborar" id="labelcolaborar03">
						<i class="fa  fa-language"></i>
					</label>
                                <input class="inputcolaborar" id="inputcolaborar03" type="text" placeholder="Idioma">
                            </div>

                            <div class="input left">
                                <label class="labelcolaborar" id="labelcolaborar04">
						<i class="fa fa-envelope"></i>
					</label>
                                <input class="inputcolaborar" id="inputcolaborar04" type="email" placeholder="Email">

                            </div>

                            <div class="input right">
                                <label class="labelcolaborar" id="labelcolaborar05">
						<i class="fa  fa-phone"></i>
					</label>
                                <input class="inputcolaborar" id="inputcolaborar05" type="text" placeholder="Contacto telefónico">
                            </div>
                        
                         <div class="checkboxes">
                                <div class="opcao"><input type="checkbox" id="d1" name="dd" />
                                    <label for="d1"><span class="square"></span>Amigo <span class="explicacao">( acesso a todas as exposições )</span></label>
                                    <p class="preco">49€</p>
                                </div>

                                <div class="opcao margin-left"><input type="checkbox" id="d2" name="dd" />
                                    <label for="d2"><span class="square"></span>Amigo estudante, desempregado</label>
                                    <p class="preco">25€</p>
                                </div>

                                <div class="opcao"><input type="checkbox" id="d3" name="dd" />
                                    <label for="d3"><span class="square"></span>Benfeitor</label>
                                    <p class="preco">100€</p>
                                </div>

                                <div class="opcao margin-left"><input type="checkbox" id="d4" name="dd" />
                                    <label for="d4"><span class="square"></span>Patrono"</label>
                                    <p class="preco">500€</p>
                                </div>
                             
                             <div class="opcao"><input onclick="var input = document.getElementById('precovazio'); if(this.checked){ input.disabled = false; input.focus();}else{input.disabled=true;}" type="checkbox" id="d5" name="dd" />
                                    <label id="valor" for="d5"><span class="square"></span>Outra doação</label>
                                    <input name="name2" disabled="disabled" id="precovazio">
                                </div>

                            </div>
                            
                            <input type="submit" value="Contribuir" />
                        </form>
                        
                      
                    </div>
                </main>
            <?php
	        include 'footer.html'
	        ?>
    </div>
</body>

</html>
