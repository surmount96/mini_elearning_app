<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class HomePageTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testExample()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function testShouldReturnAllProducts(){

        $response = $this->get("/products");
        // $response->assertStatus(200);
        $response->seeJson([
            'message' => true
        ]);
        
    }

    /**
     * /products/id [GET]
     */
    // public function testShouldReturnProduct(){
    //     $this->get("products/2", []);
    //     $this->assertStatus(200);
    //     $this->seeJson(
    //         ['data' =>
    //             [
    //                 'product_name',
    //                 'product_description',
    //                 'created_at',
    //                 'updated_at',
    //                 'links'
    //             ]
    //         ]    
    //     );
        
    // }

    // /**
    //  * /products [POST]
    //  */
    // public function testShouldCreateProduct(){

    //     $parameters = [
    //         'product_name' => 'Infinix',
    //         'product_description' => 'NOTE 4 5.7-Inch IPS LCD (3GB, 32GB ROM) Android 7.0 ',
    //     ];

    //     $this->post("products", $parameters, []);
    //     $this->assertStatus(200);
    //     $this->seeJson(
    //         ['data' =>
    //             [
    //                 'product_name',
    //                 'product_description',
    //                 'created_at',
    //                 'updated_at',
    //                 'links'
    //             ]
    //         ]    
    //     );
        
    // }
    
    // /**
    //  * /products/id [PUT]
    //  */
    // public function testShouldUpdateProduct(){

    //     $parameters = [
    //         'product_name' => 'Infinix Hot Note',
    //         'product_description' => 'Champagne Gold, 13M AF + 8M FF 4G Smartphone',
    //     ];

    //     $this->put("products/4", $parameters, []);
    //     $this->assertStatus(200);
    //     $this->seeJson(
    //         ['data' =>
    //             [
    //                 'product_name',
    //                 'product_description',
    //                 'created_at',
    //                 'updated_at',
    //                 'links'
    //             ]
    //         ]    
    //     );
    // }

    // /**
    //  * /products/id [DELETE]
    //  */
    // public function testShouldDeleteProduct(){
        
    //     $this->delete("products/5", [], []);
    //     $this->assertStatus(410);
    //     $this->seeJson([
    //             'status',
    //             'message'
    //     ]);
    // }
}
