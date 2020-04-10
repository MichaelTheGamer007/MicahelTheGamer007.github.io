const pikaImage = document.getElementById(pikaPic);
const pikaImage = document.getElementById(pikaSound);

//if you click the play button for audio, change image src from pika.jpg -> tenor.gif

<div id="book" align="center">
<script>
  function diffImage(img)
  {
    if(img.src.match(/blank/))
    {
      console.log('black');
      img.src = "../img/book_closed.jpg";
    }
    else
    {
      console.log('blank');
      img.src = "img/pika.jpg";
    }
  }
</script>    
    <img src="img/tenor.gif" id="image1" onclick=diffImage(this) />
</div>