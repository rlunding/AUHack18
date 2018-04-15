<?php


$fileName = $_FILES["file"]["name"];
$fileSize = $_FILES["file"]["size"]/1024;
$fileType = $_FILES["file"]["type"];
$fileTmpName = $_FILES["file"]["tmp_name"];

$team = $_POST['team'];

if(!isset($team) || trim($team) == '') {
    echo "You did not fill out the required fields.";
} else if ($fileType == "application/pdf") {
    if ($fileSize <= 10000) {
        $newFileName = $_POST['team'] . '.pdf';
        $uploadPath = "mm/" . $newFileName;

        if (move_uploaded_file($fileTmpName, $uploadPath)) {
            echo "File uploaded";
        }
    } else {
        echo "Maximum upload file size limit is 10MB";
    }
} else {
    echo "You can only upload PDF files. Not: " . $fileType;
}

?>