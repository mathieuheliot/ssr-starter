<?php

class CommandUtils {

    /**
     * Determines if a command exists on the current environment
     *
     * @param string $command The command to check
     * @return bool True if the command has been found ; otherwise, false.
     */
    static function exist($command) {
        $whereIsCommand = (PHP_OS == 'WINNT') ? 'where' : 'which';
    
        $process = proc_open(
        "$whereIsCommand $command",
        array(
            0 => array("pipe", "r"), //STDIN
            1 => array("pipe", "w"), //STDOUT
            2 => array("pipe", "w"), //STDERR
        ),
        $pipes
        );
        if ($process !== false) {
        $stdout = stream_get_contents($pipes[1]);
        $stderr = stream_get_contents($pipes[2]);
        fclose($pipes[1]);
        fclose($pipes[2]);
        proc_close($process);
    
        return $stdout != '';
        }
    
        return false;
    }
}
?>