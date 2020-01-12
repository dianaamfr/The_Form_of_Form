<!DOCTYPE html>
<html lang="pt">

<head>
    <title>The Form of Form | Trienal de Arquitetura de Lisboa</title>
    <meta charset="utf-8">
    <meta content="width=device-width" name="viewport">
    <link href="styles.css" rel="stylesheet" type="text/css">
    <link href="favicon.ico" rel="icon" type="image/x-icon">
    <link rel="stylesheet" href="fontes/font-awesome/css/font-awesome.min.css">
    <link href="stylesnoticia.css" rel="stylesheet" type="text/css">
    <link href="slick-1.6.0/slick-1.6.0/slick/slick.css" rel="stylesheet" type="text/css">
    <link href="slick-1.6.0/slick-1.6.0/slick/slick-theme.css" rel="stylesheet" type="text/css">
    <script src="jquery-3.2.1.min.js">


    </script>
    <script src="slick-1.6.0/slick-1.6.0/slick/slick.js" type="text/javascript">


    </script>
    <script src="myscript.js">


    </script>
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
        <div id="noticia">
            <a href="page-noticias.php#noticiasdestaque" id="back"><img src="imagens/noticias/back-arrow.svg" alt=""><p>Ver mais notícias</p></a>
            <img id="noticiaimg" alt="" src="imagens/noticias/1-grande.jpg">
            <div id="conteudonoticia">
            <p id="tiponoticia">Reportagem</p>
            <h3>Como é a vida no estaleiro?</h3>
            <p id="fontenoticia">Jornal Sábado</p>
            <p id="datanoticia">08-Dez-16</p>
            <p id="destaquenoticia">É "Obra", diz Pedro Fiori Arantes. O arquitecto e professor esteve em Portugal para dar uma conferência na Trienal de Arquitectura de Lisboa e falar sobre a exposição que tem na Fundação Gulbenkian.</p>
            <p class="textonoticia">Num episódio dos Simpsons passado no ano 2000, Marge envia uma carta ao arquitecto Frank O. Gehry a pedir-lhe que desenhe uma sala de concertos para a sua cidade, Springfield, a primeira do mundo a abolir o sistema métrico. O arquitecto lê a carta e, desinteressado da proposta, atira-a para o chão.</p>

<p  class="textonoticia">Não seria por falta de tempo, ou das conversas que andaria a ter com a Câmara Municipal de Lisboa para projectar o Parque Mayer. Gehry simplesmente achou que o pedido não merecia a sua atenção. Só que, ao olhar para o papel amassado no passeio, muda de ideias. Resultado: usa o papel tal e qual como está para ser a maquete da nova sala de espectáculos de Springfield.</p>
</div>
            </div>
        </main>
        <?php
	        include 'footer.html'
	        ?>
    </div>

</body>

</html>
