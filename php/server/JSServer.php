<?php

include APP_PATH . 'utils/CommandUtils.php';

class JSServer {

    static $_SERVER_LOCAL = './js/index.js';
    static $_SERVER_REMOTE = 'http://localhost:3000/';

    static function render() {

        // TODO send request to remote server with same URI path
        // $_SERVER_REMOTE . $_SERVER['REQUEST_URI']
        if (CommandUtils::exist('node')) {
            $rendered = exec('node ' . JSServer::$_SERVER_LOCAL);
            print($rendered);
        }
        else {
            error_log("Node is not available ; page will be rendered without JS interpretation");
        }
    }
}

?>