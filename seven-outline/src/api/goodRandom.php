<?php
    /*param   count 返回商品数量*/

    
    $count = isset($_GET["count"])?$_GET["count"]:0;
    /* 文件路径 */
    $file_url = "../data/goodlist.json";
    /* 文件 */
    $file = fopen($file_url,'r');
    /* 读取文件 */
    $file_content = fread($file,filesize($file_url));
    /* 数据转化为对象 */
    $data_arr = json_decode($file_content);
    /*打乱数组*/
    shuffle($data_arr);

    /*返回数组*/
    if($count > 0){
        $arr = array_slice($data_arr, 0, $count);
        echo json_encode($arr,JSON_UNESCAPED_UNICODE);
    }


    fclose($file);
?>