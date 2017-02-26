$(document).ready(function() 
{
	$(".menubutonu").click(function() 
    {
      $(".menum").slideToggle("slow"); // menü butonuna menüyü hem açma hem kapatma yeteneğini slideToggle() uygulayarak veriyoruz 
    });
    $(window).resize(function() // resize metodu pencere boyutu her değiştiğinde çalışacaktır
    {
      if($(window).width()>600) // eğer ekran genişliği 600 px den büyükse menüdeki o an çalışan style özelliğini kaldır
      {
        $(".menum").removeAttr("style");
      }
    });
});