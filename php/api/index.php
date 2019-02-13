<?php

  // Good job here! 

  $db = Array (
    Array ("name" => "apples", "value" => 5, "img" => "/public/apple.jpg"),
    Array ("name" => "oranges", "value" => 3, "img" => "/public/orange.jpg"),
    Array ("name" => "pears", "value" => 12, "img" => "/public/pear.jpg")
  );

  header("Content-type:application/json");
  header("HTTP/1.1 200 Success");

  echo json_encode(Array (
   Array ("name" => "apples"),
   Array ("name" => "oranges"),
   Array ("name" => "pears")
 ));

?>