<?php

    # INICIALIAZAÇÃO 
    require_once "bootstrap.php";

    # USED CLASSES
    use backend\Frontend;
    
    # SYS VAR
    $sys = Array(
       "config" => array_merge(
           $_M_THIS_CONFIG,
           Array(
               "upload-path" => $_M_CONFIG->system['upload-path']
           )
       )
    );
        
    # RUN