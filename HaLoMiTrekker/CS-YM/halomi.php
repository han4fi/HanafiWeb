<?php
$image_on = 'https://googledrive.com/host/0B-lLCIHQ4swBZ2pxaUJxRVVSdG8/online.png';
$image_off = 'https://googledrive.com/host/0B-lLCIHQ4swBZ2pxaUJxRVVSdG8/online.png';
$yahoo_id = 'halomitrekker';
$status = intval(file_get_contents('http://opi.yahoo.com/online?u='.$yahoo_id.'&m=t&t=1'));
if($status) {
$ymstatus = $image_on;
} else {
$ymstatus = $image_off;
}
header('Location:'.$ymstatus);
?>