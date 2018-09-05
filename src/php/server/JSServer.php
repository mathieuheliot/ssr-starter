<?php

include APP_PATH . 'utils/CommandUtils.php';

class JSServer {

    static $_SERVER_URL = 'http://localhost:3000/';

    static function render() {

        // TODO send request to remote server with same URI path
        // $_SERVER_URL . $_SERVER['REQUEST_URI']

        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, JSServer::$_SERVER_URL); 
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1); //return the transfer as a string 
        $output = curl_exec($curl);
        curl_close($curl);

        // TODO check if request successful
        print($output);
    }
}

?>