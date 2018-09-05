<?php

/**
 * This is an example of bootstrap file of backend application.
 * It can be replaced by an application like Laravel, Prestashop, Symphony, etc.
 */

define('APP_PATH', './');
define('TEMPLATE_PATH', './templates/');

include APP_PATH . 'server/JSServer.php';
include TEMPLATE_PATH . 'layout.php';

?>