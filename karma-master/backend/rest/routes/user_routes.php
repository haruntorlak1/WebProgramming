<?php

require_once __DIR__ . '/../services/UserService.class.php';

Flight::set('user_service', new UserService());



/**
 * @OA\Post(
 *      path="/auth/login",
 *      tags={"auth"},
 *      summary="Login to the system using email and password",
 *      @OA\Response(
 *          response=200,
 *          description="User data and JWT"
 *      ),
 *      @OA\RequestBody(
 *          description="Credentials",
 *          @OA\JsonContent(
 *              required={"email", "password"},
 *               @OA\Property(property="email", type="string", example="email@gmail.com", description="User Email"),
 *              @OA\Property(property="password", type="string", example="somepassword", description="User Password")
 *          )
 *      )
 * )
 */

Flight::route('POST /user/add', function(){
    $payload = Flight::request()->data->getData();
    $user = Flight::get('user_service')->add_user($payload);
    Flight::json(['message' => "You successfully added a user", 'data' => $user]);
});

/**
     * @OA\Get(
     *      path="/user",
     *      tags={"user"},
     *      summary="Get all users",
     *      @OA\Response(
     *           response=200,
     *           description="Array of all of the users in the databases"
     *      )
     * )
     */

Flight::route('GET /user', function(){
    $data = Flight::get('user_service')->get_user();
    Flight::json($data);
});

?>
