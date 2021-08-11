<?php



  $corpo = "
           
           Nome:".$_POST['nome']."
           E-mail: ".$_POST['mail']."

  ";

  mail("mauhonorat@gmail.com",$corpo,'From: contato@portfolio.com');

  echo ' <h1 style="font-family:Arial;text-align:center"> Seus dados foram enviados com sucesso <br><a href="index.html"> Clique aqui para voltar ';


  /*

	echo ' <h1 style="color:#f4f4f4;text-align:center;font-family:Arial;background:SkyBlue;padding:15px"> Seus dados foram enviados com sucesso!	 </h1><br> <a href="index.html" style="font-family:Arial;color:brown;display:block;text-align:center"> Clique aqui para voltar à página.';*/
?>


