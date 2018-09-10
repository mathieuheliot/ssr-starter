<?php

class JSServer {
    
    // If something wrong occured, log the error message
    // but returns an empty result in order to let be still client side rendered
    static function render() {

        if (!defined('JS_SERVER_URL')) {
            error_log("You must defined 'JS_SERVER_URL' first");
            return '';
        }

        if (!defined('JS_SERVER_PORT')) {
            define('JS_SERVER_PORT', '80');
        }

        // Create a curl handle with a mispelled protocol in URL
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, JS_SERVER_URL); 
        curl_setopt($curl, CURLOPT_PORT, JS_SERVER_PORT); 
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1); //returns the transfer as a string 

        // Send request to remote server
        $output = curl_exec($curl);

        // Check for errors
        if ($errno = curl_errno($curl)) {
            $errorMsg = curl_strerror($errno);
            error_log("Request to remote JavaScrpt server {$_SERVER_URL}:{$_SERVER_PORT} failed({$errno}):\n {$errorMsg}");
            return '';
        }

        curl_close($curl);
        print($output);
    }
}

?>