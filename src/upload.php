<?php

// Moves uploaded file to a nice directory
StargetPath = "uploads/" . basename($_FILES["fileInput"]["name"]);
move_uploaded_file($_FILES["fileInput"]["tmp_name"]. StargetPath);