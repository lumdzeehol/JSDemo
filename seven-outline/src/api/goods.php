<?php
    
    /*param   page 当前页数
    param   order 排序方式*/

    $page = isset($_GET["page"])?$_GET["page"]:"1";
    $numPerPage = 20;

    $order = isset($_GET["order"])?$_GET["order"]:"";
    /* 文件路径 */
    $file_url = "../data/goodlist.json";
    /* 文件 */
    $file = fopen($file_url,'r');
    /* 读取文件 */
    $file_content = fread($file,filesize($file_url));
    /* 数据转化为对象 */
    $data_arr = json_decode($file_content);
    $count = count($data_arr);
    /* 排序 */
    /* 若order参数为asc，数组将升序排序 */
    /* 若order参数为desc，数组将降序排序 */
    /* 否则不进行排序 */
    if($order == "asc"){
        usort($data_arr,"sortByPriceAsc");
    }else if($order == "desc"){
        usort($data_arr,"sortByPriceDesc");
    }

    $res = array('data' => array_slice($data_arr, ($page - 1) * $numPerPage,$numPerPage), 'numofPages' => ceil($count/20));
    
    echo json_encode($res,JSON_UNESCAPED_UNICODE);

    function sortByPriceAsc($a,$b){
        if($a->price > $b->price){
            return 1;
        }
    }
    function sortByPriceDesc($a,$b){
        if($a->price < $b->price){
            return 1;
        }
    }



    // var_dump($data_arr[0]);
    // echo count($data_arr[0]->guid);
    // echo $data_arr[0]->price;
    fclose($file);
?>