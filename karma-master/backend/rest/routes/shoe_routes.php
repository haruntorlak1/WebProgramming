<?php

require_once __DIR__ .'/../services/ShoesService.class.php';

Flight::set('shoe_service', new ShoesService());


/**
 * @OA\Post(
 *      path="/shoes/add",
 *      tags={"shoes"},
 *      summary="Add shoe to the database",
 *      @OA\Response(
 *          response=200,
 *          description="Shoe data, or exception if the shoe is not added properly"
 *      ),
 *      @OA\RequestBody(
 *          description="Shoe data payload",
 *          @OA\JsonContent(
 *              required={"shoeName", "brandName", "shoeCategory"},
 *               @OA\Property(property="shoeID", type="integer", example="1", description="Shoe ID"),
 *              @OA\Property(property="shoeName", type="string", example="A Shoe Name", description="Shoe Name"),
 *              @OA\Property(property="brandName", type="string", example="A Brand", description="Brand"),
 *              @OA\Property(property="shoeCategory", type="string", example="A Category", description="Category")
 *          )
 *      )
 * )
 */


Flight::route('POST /shoes/add',function(){
    $payload=Flight::request()->data->getData();
    $shoe=Flight::get('shoe_service')->add_shoe($payload);
    Flight::json(['message'=>"You succesfully added the shoe",'data'=>$shoe]);
});


/**
     * @OA\Get(
     *      path="/shoes",
     *      tags={"shoes"},
     *      summary="Get all shoes",
     *      @OA\Response(
     *           response=200,
     *           description="Array of all of the shoes in the databases"
     *      )
     * )
     */
Flight::route('GET /shoes', function(){
    
    $data = Flight::get('shoe_service')->get_shoes();

  
    Flight::json($data);
});


/**
     * @OA\Get(
     *      path="/shoes/shoe",
     *      tags={"shoes"},
     *      summary="Get shoe by id",
     *      @OA\Response(
     *           response=200,
     *           description="Shoe data, or false if the shoe does not exist"
     *      ),
     *    @OA\Parameter(@OA\Schema(type="number"), in="query", name="shoeID", example="1", description="Shoe ID")
     * )
     */
    Flight::route('GET /shoes/shoe', function(){
        $params=Flight::request()->query;

        $shoe = Flight::get('shoe_service')->get_shoe_by_id($params['shoeID']);
    
      
        Flight::json($shoe);
    });

?>

